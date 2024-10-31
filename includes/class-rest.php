<?php
/**
 * Author: postcodex
 *
 * @package Postcodex_Lookup
 */

namespace Postcodex_Lookup;

if ( ! function_exists( 'get_plugin_data' ) ) {
	include_once ABSPATH . 'wp-admin/includes/plugin.php';
}

/**
 * Class REST
 *
 * @package Postcodex_Lookup
 */
class REST extends \WP_REST_Controller {

	/**
	 * Holds the class instance object
	 *
	 * @var REST $instance object
	 */
	protected static $instance;

	/**
	 * @var string REST api URL
	 */
	protected $api_url;

	/**
	 * @var string REST nonce
	 */
	protected $nonce;

	/**
	 * @var string REST cache group
	 */
	protected $cache_group;

	/**
	 * REST constructor.
	 */
	public function __construct() {

		$this->namespace   = strtolower( __NAMESPACE__ );
		$this->rest_base   = get_plugin_data( POSTCODEX_LOOKUP_PLUGIN_FILE, false, false )['Version'];
		$this->api_url     = esc_url_raw( trailingslashit( rest_url( "{$this->namespace}/{$this->rest_base}" ) ) );
		$this->nonce       = wp_create_nonce( 'wp_rest' );
		$this->cache_group = 'pl_rest';
	}

	/**
	 * Return an instance of this class
	 *
	 * @return REST The class instance object
	 */
	public static function instance() {

		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Magic get method.
	 *
	 * @param string $key Class property key.
	 *
	 * @return mixed|null
	 */
	public function __get( $key ) {

		return $this->$key ?? null;
	}

	/**
	 * Get REST namespace.
	 *
	 * @return string
	 */
	public function get_namespace() {

		return $this->namespace;
	}

	/**
	 * Get REST base.
	 *
	 * @return mixed
	 */
	public function get_rest_base() {

		return $this->rest_base;
	}

	/**
	 * Register the routes for the objects of the controller.
	 */
	public function register_routes() {

		register_rest_route(
			$this->namespace,
			"/{$this->rest_base}/search-addresses",
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => array( $this, 'search_addresses' ),
				'permission_callback' => array( $this, 'get_items_permissions_check' ),
			)
		);
		register_rest_route(
			$this->namespace,
			"/{$this->rest_base}/validate-api-token",
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => array( $this, 'validate_api_token' ),
				'permission_callback' => array( $this, 'create_item_permissions_check' ),
			)
		);
	}

	/**
	 * REST response.
	 *
	 * @param mixed|\WP_Error  $data    Response data.
	 * @param \WP_REST_Request $request Request object.
	 * @param int              $status  Response Status code.
	 * @param array            $headers Additional headers.
	 *
	 * @return \WP_REST_Response REST response header.
	 */
	public function rest_response( $data, $request, $status = 200, $headers = array() ) {

		return new \WP_REST_Response(
			$this->prepare_item_for_response( $data, $request ),
			$status,
			$headers
		);
	}

	/**
	 * Return prepared item.
	 *
	 * @param mixed            $item    Item to be sent as response.
	 * @param \WP_REST_Request $request Request object.
	 *
	 * @return mixed|\WP_REST_Response
	 */
	public function prepare_item_for_response( $item, $request ) {

		return $item;
	}

	/**
	 * Checks if a given request has access to get items.
	 *
	 * @param \WP_REST_Request $request Full data about the request.
	 *
	 * @return \WP_Error|bool True if the request has read access, WP_Error object otherwise.
	 * @since 1.0.0
	 *
	 */
	public function get_items_permissions_check( $request ) {

		return true;
	}

	/**
	 * Checks if a given request has access to get a specific item.
	 *
	 * @param \WP_REST_Request $request Full data about the request.
	 *
	 * @return \WP_Error|bool True if the request has read access for the item, WP_Error object otherwise.
	 * @since 1.0.0
	 *
	 */
	public function get_item_permissions_check( $request ) {

		return true;
	}

	/**
	 * Checks if a given request has access to create items.
	 *
	 * @param \WP_REST_Request $request Full data about the request.
	 *
	 * @return \WP_Error|bool True if the request has access to create items, WP_Error object otherwise.
	 * @since 1.0.0
	 *
	 */
	public function create_item_permissions_check( $request ) {

		return current_user_can( 'manage_options' );
	}

	/**
	 * Checks if a given request has access to update a specific item.
	 *
	 * @param \WP_REST_Request $request Full data about the request.
	 *
	 * @return \WP_Error|bool True if the request has access to update the item, WP_Error object otherwise.
	 * @since 1.0.0
	 *
	 */
	public function update_item_permissions_check( $request ) {

		return current_user_can( 'manage_options' );
	}

	/**
	 * Checks if a given request has access to delete a specific item.
	 *
	 * @param \WP_REST_Request $request Full data about the request.
	 *
	 * @return \WP_Error|bool True if the request has access to delete the item, WP_Error object otherwise.
	 * @since 1.0.0
	 *
	 */
	public function delete_item_permissions_check( $request ) {

		return current_user_can( 'manage_options' );
	}

	/**
	 * Search addresses
	 *
	 * @param \WP_REST_Request $request
	 *
	 * @return \WP_REST_Response
	 */
	public function search_addresses( \WP_REST_Request $request ) {

		[
			'postcode' => $postcode,
			'force'    => $force,
		] = $request->get_params();

		$cache_key = 'search_' . md5( "addresses_{$postcode}" );
		$addresses = wp_cache_get( $cache_key, $this->cache_group );

		if ( ! $addresses || $force ) {
			$addresses = API::instance()->address_lookup( $postcode );
			$addresses = array_map(
				function ( $address ) {

					$hash = md5( wp_json_encode( $address ) );

					$address['hash'] = $hash;

					return $address;
				},
				$addresses
			);
			usort(
				$addresses,
				function ( $a, $b ) {

					return $a['addressDescription'] <=> $b['addressDescription'];
				}
			);
		}
		if ( is_wp_error( $addresses ) ) {
			if ( Index::instance()->is_debug_mode() ) {
				wc_get_logger()->error( print_r( $addresses, true ), array( 'source' => 'REST::search_addresses' ) );//phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_print_r
			}

			return $addresses;
		}

		return $this->rest_response( compact( 'addresses' ), $request );
	}

	/**
	 * Validates API token
	 *
	 * @param \WP_REST_Request $request
	 *
	 * @return \WP_REST_Response
	 */
	public function validate_api_token( \WP_REST_Request $request ) {

		[
			'apiKey' => $api_key,
		] = $request->get_params();

		$response = API::instance()->verify_api_key( $api_key );
		if ( is_wp_error( $response ) ) {
			return $response;
		}

		$is_valid = isset( $response['ready'] ) && ! ! $response['ready'];

		return $this->rest_response( compact( 'is_valid' ), $request );
	}
}
