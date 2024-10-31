<?php
/**
 * Author: postcodex
 *
 * @package Postcodex_Lookup
 */

namespace Postcodex_Lookup;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'You are not allowed to call this page directly.' );
}

/**
 * Class Index
 *
 * @package Postcodex_Lookup
 */
class Index {

	/**
	 * Holds the class instance object
	 *
	 * @var Index $instance object
	 */
	protected static $instance;

	/**
	 * Holds the options default values
	 *
	 * @var array
	 */
	protected $default_options;

	/**
	 * Holds boolean value of whether WooCommerce plugin is active or not.
	 *
	 * @var bool $wc_is_active
	 */
	protected $wc_is_active;

	/**
	 * Index constructor
	 */
	public function __construct() {

		$this->wc_is_active    = defined( 'WC_PLUGIN_FILE' );
		$this->default_options = array();
	}

	/**
	 * Magic get
	 *
	 * @param string $key
	 *
	 * @return null|mixed
	 */
	public function __get( $key ) {

		return $this->$key ?? null;
	}

	/**
	 * Return an instance of this class
	 *
	 * @return Index The class instance object
	 */
	public static function instance() {

		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Initialize plugin hook handlers
	 */
	public function init() {

		$this->actions();
		$this->filters();

		Assets::instance()->init();

		if ( is_admin() ) {
			Admin_Page::instance()->init();
		}
	}

	/**
	 * Action hooks
	 */
	protected function actions() {

		add_action( 'rest_api_init', array( $this, 'register_routes' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'wp_enqueue_scripts' ) );

		if ( is_admin() ) {
			add_action( 'admin_notices', array( $this, 'admin_notices' ) );
			add_action( 'add_meta_boxes', array( $this, 'add_meta_boxes' ), 10, 2 );
			add_action( 'save_post', array( $this, 'save_post' ), 10, 3 );
		}
	}

	/**
	 * Filter hooks
	 */
	protected function filters() {

		add_filter( 'plugin_action_links', array( $this, 'plugin_action_links' ), 1, 2 );
	}

	/**
	 * Get plugin settings
	 *
	 * @param string     $key
	 * @param mixed|null $empty
	 *
	 * @return array|mixed|null
	 */
	public function get_option( $key = '', $empty = null ) {

		if ( empty( $this->default_options ) ) {
			foreach ( Admin_Page::instance()->form_fields as $option_key => $data ) {
				$this->default_options[ $option_key ] = $data['default'] ?? null;
			}
			foreach ( Admin_Page::instance()->style_fields as $option_key => $data ) {
				$this->default_options[ $option_key ] = $data['default'] ?? null;
			}
		}
		$options = get_option( 'postcodex_lookup_settings', $this->default_options );
		$options = wp_parse_args( $options, $this->default_options );

		if ( ! $key && ! empty( $options ) ) {
			return $options;
		} elseif ( ! $key && empty( $options ) ) {
			return $empty;
		}

		return $options[ $key ] ?? $empty;
	}

	/**
	 * Get selector override
	 *
	 * @param int    $post_id
	 * @param string $key
	 *
	 * @return mixed|string|null
	 */
	public function get_selector( int $post_id, string $key ) {

		$override = get_post_meta( $post_id, 'pl_override_selector', true );
		if ( ! $override || 'no' === $override ) {
			return $this->get_option( $key );
		}

		$selector = get_post_meta( $post_id, $key, true );
		if ( empty( $selector ) ) {
			$selector = $this->get_option( $key );
		}

		return $selector;
	}

	/**
	 * Add metaboxes to allow page page/post override of selectors
	 *
	 * @param string        $post_type
	 * @param null|\WP_Post $post
	 */
	public function add_meta_boxes( $post_type = '', $post = null ) {

		add_meta_box(
			'postcodex-lookup-selector-override',
			__( 'Postcodex Lookup', 'postcodex-lookup' ),
			array( $this, 'render_meta_box' ),
			null,
			'side'
		);
	}

	/**
	 * Render meta box
	 *
	 * @param \WP_Post $post
	 * @param array    $raw_args
	 */
	public function render_meta_box( $post, $raw_args = array() ) {

		require_once POSTCODEX_LOOKUP_PLUGIN_DIR_PATH . 'templates/selector-override-metabox.php';
	}

	/**
	 * Save post meta
	 *
	 * @param int      $post_id
	 * @param \WP_Post $post
	 * @param bool     $update
	 */
	public function save_post( $post_id, $post, $update = false ) {

		if ( wp_is_post_revision( $post_id ) || wp_is_post_autosave( $post_id ) || ! current_user_can( 'edit_post' ) ) {
			return;
		}

		if ( is_multisite() && ms_is_switched() ) {
			return;
		}

		if ( ! wp_verify_nonce( filter_input( INPUT_POST, '_postcodex_nonce', FILTER_SANITIZE_STRING ), 'save-postcodex-lookup-selector-override' ) ) {
			return;
		}

		$definition = array(
			'pl_load'              => FILTER_SANITIZE_STRING,
			'pl_autosearch'        => FILTER_SANITIZE_STRING,
			'pl_override_selector' => FILTER_SANITIZE_STRING,
			'address1_selector'    => FILTER_SANITIZE_STRING,
			'address2_selector'    => FILTER_SANITIZE_STRING,
			'city_selector'        => FILTER_SANITIZE_STRING,
			'country_selector'     => FILTER_SANITIZE_STRING,
			'postcode_selector'    => FILTER_SANITIZE_STRING,
		);
		$posted     = filter_input_array( INPUT_POST, $definition );

		$yn_fields = array(
			'pl_load',
			'pl_override_selector',
		);
		foreach ( $posted as $option_key => $value ) {
			if ( in_array( $option_key, $yn_fields, true ) ) {
				if ( $value ) {
					$value = 'yes';
				} else {
					$value = 'no';
				}
			}
			update_post_meta( $post_id, $option_key, $value );
		}
	}

	/**
	 * Checks if debug mode is active
	 *
	 * @return bool
	 */
	public function is_debug_mode() {

		return 'yes' === $this->get_option( 'debug' ) && function_exists( 'wc_get_logger' );
	}

	/**
	 * Adds plugin action links
	 *
	 * @param string[] $actions
	 * @param string   $plugin_file
	 *
	 * @return mixed
	 */
	public function plugin_action_links( array $actions, string $plugin_file ) {

		if ( plugin_basename( POSTCODEX_LOOKUP_PLUGIN_FILE ) === $plugin_file ) {
			$actions = array_merge(
				array(
					'settings' => sprintf(
						'<a href="%1$s">%2$s</a>',
						esc_url(
							add_query_arg(
								array(
									'page' => Admin_Page::instance()->slug,
								),
								admin_url( 'admin.php' )
							)
						),
						__( 'Settings' )
					),
				),
				$actions
			);
		}

		return $actions;
	}

	/**
	 * Admin notices
	 */
	public function admin_notices() {

		$settings = get_option( 'woocommerce_postcodex_lookup_settings' );
		if ( ! empty( $settings['debug'] ) && 'no' !== $settings['debug'] ) {
			printf(
				'<div class="notice-info notice"><p>%s</p></div>',
				sprintf(/* translators: %1$s = opening <a> tag; %2$s = closing </a> tag */
					esc_html__( 'Postcodex Lookup is logging debug information. Please disable it if not actively debugging from the %1$ssettings page%2$s.', 'postcodex-lookup' ),
					sprintf(
						'<a href="%s">',
						esc_url(
							add_query_arg(
								array(
									'page' => Admin_Page::instance()->slug,
								),
								admin_url( 'admin.php' )
							)
						)
					),
					'</a>'
				)
			);
		}
	}

	/**
	 * Register REST routes. Should be called separately to avoid fatal error.
	 */
	public function register_routes() {

		REST::instance()->register_routes();
	}

	/**
	 * Enqueue frontend scripts/styles
	 */
	public function wp_enqueue_scripts() {

		if ( get_post_meta( get_the_ID(), 'pl_load', true ) || ( function_exists( 'is_checkout' ) && is_checkout() ) ) {
			Assets::instance()->enqueue_address_lookup_app();
		}
	}
}
