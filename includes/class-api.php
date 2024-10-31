<?php
/**
 * Author: postcodex
 * Date: 9/29/20
 * Time: 9:31 PM
 *
 * @package Postcodex_Lookup
 */

namespace Postcodex_Lookup;

defined( 'ABSPATH' ) || exit;

/**
 * Class API
 *
 * @package Postcodex_Lookup
 */
class API {

	const CACHE_GROUP = 'postcodex_lookup';

	/**
	 * Holds the API base URL
	 *
	 * @var string
	 */
	protected $base_url;

	/**
	 * Holds the class instance object
	 *
	 * @var API $instance object
	 */
	protected static $instance;

	/**
	 * API constructor
	 *
	 * @codeCoverageIgnore
	 */
	public function __construct() {

		$this->base_url = 'https://api.postcodex.io';
	}

	/**
	 * Return an instance of this class
	 *
	 * @return API The class instance object
	 *
	 * @codeCoverageIgnore
	 */
	public static function instance() {

		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Send API request to Postcodex
	 *
	 * @param string     $end_point
	 * @param null|mixed $data
	 * @param array      $args
	 *
	 * @return array|\WP_Error
	 */
	public function send_request( string $end_point, $data = null, $args = array() ) {

		if ( $data && isset( $data['api_key'] ) ) {
			$api_key = $data['api_key'];
		} else {
			$api_key = Index::instance()->get_option( 'api_key' );
		}
		if ( ! $api_key ) {
			return new \WP_Error( 'missing_api_key', esc_html__( 'Missing API key.', 'postcodex-lookup' ) );
		}
		$url      = "{$this->base_url}/public/postcode/{$end_point}";
		$defaults = array(
			'timeout' => 15,
			'headers' => array(
				'X-AUTH-TOKEN' => $api_key,
				'Content-Type' => 'application/json',
				'referer' => get_site_url(),
			),
			'body'    => null,
			'method'  => 'GET',
		);

		$args = wp_parse_args( $args, $defaults );

		if ( 'GET' === $args['method'] && $data ) {
			$url .= '?' . http_build_query( $data );
		} elseif ( ! empty( $data ) ) {
			$args['body'] = wp_json_encode( $data );
		}

		switch ( $args['method'] ) {
			case 'POST':
				unset( $args['method'] );
				$response = wp_remote_post( $url, $args );
				break;
			case 'GET':
				unset( $args['method'] );
				$response = wp_remote_get( $url, $args );
				break;
			default:
				$response = wp_remote_request( $url, $args );
		}

		if ( Index::instance()->is_debug_mode() ) {
			wc_get_logger()->error( print_r( $response, true ), array( 'source' => 'API::send_request' ) );//phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_print_r
		}

		return apply_filters( 'postcodex_lookup_send_request_response', $response, $url, $end_point, $args );
	}

	/**
	 * Address lookup
	 *
	 * @param string $postcode Postcode to lookup addresses for
	 * @param bool   $force    Whether to send request to Postcodex API or fetch from cache (if available).
	 *
	 * @return array|mixed|\WP_Error
	 */
	public function address_lookup( string $postcode, $force = false ) {

		$cache_key = 'pl_address_' . md5( "lookup_{$postcode}" );
		$json      = wp_cache_get( $cache_key, self::CACHE_GROUP );
		if ( ! $json || $force ) {
			$response = $this->send_request( 'lookups', compact( 'postcode' ) );

			if ( Index::instance()->is_debug_mode() ) {
				wc_get_logger()->error( print_r( $response, true ), array( 'source' => 'API::address_lookup' ) );//phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_print_r
			}

			if ( is_wp_error( $response ) ) {
				if ( Index::instance()->is_debug_mode() ) {
					wc_get_logger()->error( print_r( $response, true ), array( 'source' => 'API::address_lookup' ) );//phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_print_r
				}

				return $response;
			}

			$code = wp_remote_retrieve_response_code( $response );
			$body = wp_remote_retrieve_body( $response );
			$json = json_decode( $body, true );
			if ( 200 === $code ) {
				wp_cache_add( $cache_key, $json, self::CACHE_GROUP, DAY_IN_SECONDS );
			} else {
				$error = ! empty( $body ) ? $body : esc_html__( 'Something went wrong with the request.', 'postcodex-lookup' );

				return new \WP_Error( 'unknown_error', $error, array( 'status' => $response['code'] ?? 500 ) );
			}
		}

		return apply_filters( 'postcodex_lookup_address_lookup_response', $json );
	}

	/**
	 * Verify API key
	 *
	 * @param string $api_key
	 *
	 * @return array|mixed|\WP_Error
	 */
	public function verify_api_key( string $api_key ) {

		$api_key  = trim( $api_key );
		$response = $this->send_request( 'ready', compact( 'api_key' ) );

		if ( Index::instance()->is_debug_mode() ) {
			wc_get_logger()->error( print_r( $response, true ), array( 'source' => 'API::verify_api_key' ) );//phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_print_r
		}

		if ( is_wp_error( $response ) ) {
			if ( Index::instance()->is_debug_mode() ) {
				wc_get_logger()->error( print_r( $response, true ), array( 'source' => 'API::verify_api_key' ) );//phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_print_r
			}

			return $response;
		}

		$code = wp_remote_retrieve_response_code( $response );
		$body = wp_remote_retrieve_body( $response );
		$json = json_decode( $body, true );
		if ( 200 === $code ) {
			return $json;
		} elseif ( 401 === $code ) {
			return array( 'ready' => false );
		}

		$error = ! empty( $body ) ? $body : esc_html__( 'Unable to verify API key.', 'postcodex-lookup' );

		return new \WP_Error( 'unknown_error', $error, array( 'status' => $response['code'] ?? 500 ) );
	}
}
