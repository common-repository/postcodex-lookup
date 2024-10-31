<?php
/**
 * Author: postcodex
 * Date: 10/14/20
 * Time: 8:40 AM
 *
 * @package Postcodex_Lookup
 */

namespace Postcodex_Lookup;

defined( 'ABSPATH' ) || exit;

/**
 * Class Admin_Page
 *
 * @package Postcodex_Lookup
 */
class Admin_Page {

	/**
	 * Holds the class instance object
	 *
	 * @var Admin_Page $instance object
	 */
	protected static $instance;

	/**
	 * Holds admin page slug
	 *
	 * @var string $slug
	 */
	protected $slug;

	/**
	 * Holds the admin page hook
	 *
	 * @var string
	 */
	protected $admin_page_hook;

	/**
	 * Admin page form fields
	 *
	 * @var array
	 */
	protected $form_fields;

	/**
	 * Admin form style fields
	 *
	 * @var array
	 */
	protected $style_fields;

	/**
	 * Admin_Page constructor
	 *
	 * @codeCoverageIgnore
	 */
	public function __construct() {

		$this->slug        = 'postcodex-lookup';
		$this->form_fields = apply_filters(
			'postcodex_lookup_form_fields_settings',
			array(
				'api_key'           => array(
					'title'       => __( 'API Key', 'postcodex-lookup' ),
					'type'        => 'text',
					'description' => sprintf(/* translators: %1$s = opening <a> tag ; %2$s = closing </a> tag */
						__( '%1$sRegister for your API key and free bonus credits%2$s', 'postcodex-lookup' ),
						'<a href="https://console.postcodex.io/signup" target="_blank">',
						'</a>'
					),
					'default'     => '',
					'placeholder' => __( 'Enter your postcodex API Key.', 'postcodex-lookup' ),
				),
				'autosearch'        => array(
					'title'       => __( 'Autosearch', 'postcodex-lookup' ),
					'type'        => 'checkbox',
					'label'       => __( 'Automatic search.', 'postcodex-lookup' ),
					'default'     => 'no',
					'description' => __( 'Automatically search as users enter their postcode.', 'postcodex-lookup' ),
				),
				'address1_selector' => array(
					'title'       => __( 'Address 1', 'postcodex-lookup' ),
					'type'        => 'text',
					'default'     => '#billing_address_1',
					'description' => __( 'Address1 input id or class selector.', 'postcodex-lookup' ),
				),
				'address2_selector' => array(
					'title'       => __( 'Address 2', 'postcodex-lookup' ),
					'type'        => 'text',
					'default'     => '#billing_address_2',
					'description' => __( 'Address2 input id or class selector.', 'postcodex-lookup' ),
				),
				'city_selector'     => array(
					'title'       => __( 'City', 'postcodex-lookup' ),
					'type'        => 'text',
					'default'     => '#billing_city',
					'description' => __( 'City input id or class selector.', 'postcodex-lookup' ),
				),
				'country_selector'  => array(
					'title'       => __( 'Country', 'postcodex-lookup' ),
					'type'        => 'text',
					'default'     => '#billing_country',
					'description' => __( 'Country input id or class selector.', 'postcodex-lookup' ),
				),
				'postcode_selector' => array(
					'title'       => __( 'Postcode', 'postcodex-lookup' ),
					'type'        => 'text',
					'default'     => '#billing_postcode',
					'description' => __( 'Postcode input id or class selector.', 'postcodex-lookup' ),
				),
			)
		);

		if ( Index::instance()->wc_is_active ) {
			$this->form_fields = array_merge(
				$this->form_fields,
				array(
					'debug' => array(
						'title'       => __( 'Debug Log', 'postcodex-lookup' ),
						'type'        => 'checkbox',
						'label'       => __( 'Enable logging', 'postcodex-lookup' ),
						'default'     => 'no',
						'description' => __( 'Log events such as API requests. Available only if WooCommerce is active.', 'postcodex-lookup' ),
					),
				)
			);
		}

		$this->style_fields = apply_filters(
			'postcodex_lookup_form_fields_settings',
			array(
				'search_btn_color'         => array(
					'title'       => __( 'Search Button Color', 'postcodex-lookup' ),
					'type'        => 'color-picker',
					'default'     => '',
					'description' => __( 'The color of the button if autosearch is not enabled.', 'postcodex-lookup' ),
				),
				'search_font_color'        => array(
					'title'       => __( 'Search Button Font Color', 'postcodex-lookup' ),
					'type'        => 'color-picker',
					'default'     => '',
					'description' => __( 'The font color of the button if autosearch is not enabled.', 'postcodex-lookup' ),
				),
				'highlight_color'          => array(
					'title'       => __( 'Highlight Color', 'postcodex-lookup' ),
					'type'        => 'color-picker',
					'default'     => '',
					'description' => __( 'The color of the highlighted address in the suggestions dropdown.', 'postcodex-lookup' ),
				),
				'dropdown_bg_color'        => array(
					'title'       => __( 'Dropdown Background Color', 'postcodex-lookup' ),
					'type'        => 'color-picker',
					'default'     => '',
					'description' => __( 'The background color of the suggestions dropdown.', 'postcodex-lookup' ),
				),
				'dropdown_item_even_color' => array(
					'title'       => __( 'Dropdown Item Even Color', 'postcodex-lookup' ),
					'type'        => 'color-picker',
					'default'     => '',
					'description' => __( 'The color suggestions dropdown stripes for even items.', 'postcodex-lookup' ),
				),
				'dropdown_item_odd_color'  => array(
					'title'       => __( 'Dropdown Item Odd Color', 'postcodex-lookup' ),
					'type'        => 'color-picker',
					'default'     => '',
					'description' => __( 'The color suggestions dropdown stripes for odd items.', 'postcodex-lookup' ),
				),
				'suggestion_box_height'    => array(
					'title'   => __( 'Suggestion Box Height (in px)', 'postcodex-lookup' ),
					'type'    => 'number',
					'default' => '',
				),
				'suggestions_font_size'    => array(
					'title'   => __( 'Suggestion Items Font Size (in px)', 'postcodex-lookup' ),
					'type'    => 'number',
					'default' => '',
				),
			)
		);
	}

	/**
	 * Get class property
	 *
	 * @param string $key
	 *
	 * @return mixed|null
	 */
	public function __get( string $key ) {

		return $this->$key ?? null;
	}

	/**
	 * Return an instance of this class
	 *
	 * @return Admin_Page The class instance object
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
	 * Initialize plugin hook handlers
	 *
	 * @codeCoverageIgnore
	 */
	public function init() {

		$this->actions();
		$this->filters();
	}

	/**
	 * Action hooks
	 *
	 * @codeCoverageIgnore
	 */
	protected function actions() {

		add_action( 'admin_init', array( $this, 'admin_init' ) );
		add_action( 'admin_menu', array( $this, 'admin_menu' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'admin_enqueue_scripts' ) );
	}

	/**
	 * Filter hooks
	 *
	 * @codeCoverageIgnore
	 */
	protected function filters() {

	}

	/**
	 * Enqueue scripts/styles
	 *
	 * @param string $hook
	 */
	public function admin_enqueue_scripts( $hook = '' ) {

		if ( $hook === $this->admin_page_hook ) {
			Assets::instance()->enqueue_admin_settings_app();
		}
	}

	/**
	 * Register plugin settings control
	 */
	public function admin_init() {

		add_settings_section(
			'postcodex_lookup_settings',
			esc_html__( 'API Settings', 'postcodex-lookup' ),
			'__return_empty_string',
			'postcodex_lookup_settings'
		);

		$options = Index::instance()->get_option();
		foreach ( $this->form_fields as $key => $field ) {
			$value = $options[ $key ] ?? $field['default'] ?? '';
			add_settings_field(
				$key,
				$field['title'],
				array( $this, 'settings_field' ),
				'postcodex_lookup_settings',
				'postcodex_lookup_settings',
				compact( 'key', 'value' ) + $field
			);
		}

		add_settings_section(
			'postcodex_lookup_styles',
			esc_html__( 'Customisation', 'postcodex-lookup' ),
			'__return_empty_string',
			'postcodex_lookup_settings'
		);

		foreach ( $this->style_fields as $key => $field ) {
			$value = $options[ $key ] ?? $field['default'] ?? '';
			add_settings_field(
				$key,
				$field['title'],
				array( $this, 'settings_field' ),
				'postcodex_lookup_settings',
				'postcodex_lookup_styles',
				compact( 'key', 'value' ) + $field
			);
		}

		register_setting( 'postcodex_lookup_settings', 'postcodex_lookup_settings', array( 'sanitize_callback' => array( $this, 'sanitize_options' ) ) );
	}

	/**
	 * Validate options to be saved.
	 *
	 * @param array $fields
	 *
	 * @return array
	 */
	public function sanitize_options( array $fields ) {

		if ( ! empty( $fields['search_btn_color'] ) && ! $this->check_color( $fields['search_btn_color'] ) ) {
			add_settings_error( 'postcodex_lookup_settings', 'search_btn_color_error', __( 'Please enter either a 3 or 6 hex code digits for the button color.', 'postcodex-lookup' ) );
			$fields['search_btn_color'] = Index::instance()->get_option( 'search_btn_color' );
		}
		if ( ! empty( $fields['search_font_color'] ) && ! $this->check_color( $fields['search_font_color'] ) ) {
			add_settings_error( 'postcodex_lookup_settings', 'search_font_color_error', __( 'Please enter either a 3 or 6 hex code digits for the button font color.', 'postcodex-lookup' ) );
			$fields['search_font_color'] = Index::instance()->get_option( 'search_font_color' );
		}
		if ( ! empty( $fields['highlight_color'] ) && ! $this->check_color( $fields['highlight_color'] ) ) {
			add_settings_error( 'postcodex_lookup_settings', 'highlight_color_error', __( 'Please enter either a 3 or 6 hex code digits for the highlight color.', 'postcodex-lookup' ) );
			$fields['highlight_color'] = Index::instance()->get_option( 'search_btn_color' );
		}
		if ( ! empty( $fields['dropdown_bg_color'] ) && ! $this->check_color( $fields['dropdown_bg_color'] ) ) {
			add_settings_error( 'postcodex_lookup_settings', 'dropdown_bg_color_error', __( 'Please enter either a 3 or 6 hex code digits for the dropdown background color.', 'postcodex-lookup' ) );
			$fields['dropdown_bg_color'] = Index::instance()->get_option( 'dropdown_bg_color' );
		}
		if ( ! empty( $fields['dropdown_item_even_color'] ) && ! $this->check_color( $fields['dropdown_item_even_color'] ) ) {
			add_settings_error( 'postcodex_lookup_settings', 'dropdown_item_even_color_error', __( 'Please enter either a 3 or 6 hex code digits for the dropdown background color.', 'postcodex-lookup' ) );
			$fields['dropdown_item_even_color'] = Index::instance()->get_option( 'dropdown_item_even_color' );
		}
		if ( ! empty( $fields['dropdown_item_odd_color'] ) && ! $this->check_color( $fields['dropdown_item_odd_color'] ) ) {
			add_settings_error( 'postcodex_lookup_settings', 'dropdown_item_odd_color_error', __( 'Please enter either a 3 or 6 hex code digits for the dropdown background color.', 'postcodex-lookup' ) );
			$fields['dropdown_item_odd_color'] = Index::instance()->get_option( 'dropdown_item_odd_color' );
		}
		if ( ! empty( $fields['suggestion_box_height'] ) && ! is_numeric( $fields['suggestion_box_height'] ) ) {
			add_settings_error( 'postcodex_lookup_settings', 'suggestion_box_height_error', __( 'Please enter a number for the suggestion box height.', 'postcodex-lookup' ) );
			$fields['suggestion_box_height'] = Index::instance()->get_option( 'suggestion_box_height' );
		}
		if ( ! empty( $fields['suggestions_font_size'] ) && ! is_numeric( $fields['suggestions_font_size'] ) ) {
			add_settings_error( 'postcodex_lookup_settings', 'suggestions_font_size_error', __( 'Please enter a number for the suggestion items font size.', 'postcodex-lookup' ) );
			$fields['suggestions_font_size'] = Index::instance()->get_option( 'suggestions_font_size' );
		}

		return $fields;
	}

	/**
	 * Check color in either 3 or 6 hex code digits.
	 *
	 * @param $value
	 *
	 * @return bool
	 */
	protected function check_color( $value ) {

		if ( preg_match( '/^#([a-f0-9]{6}|[a-f0-9]{3})$/i', $value ) ) {
			return true;
		}

		return false;
	}

	/**
	 * Settings field markup
	 *
	 * @param array $args
	 */
	public function settings_field( array $args ) {

		[
			'key'   => $key,
			'value' => $value,
		] = $args;

		$html = '';
		switch ( $args['type'] ) {
			case 'text':
				$html .= sprintf(
					'<input name="postcodex_lookup_settings[%1$s]" type="text" id="%1$s" value="%2$s" class="regular-text%3$s"%4$s>',
					esc_attr( $key ),
					esc_attr( $value ),
					! empty( $args['class'] ) ? ' ' . esc_attr( $args['class'] ) : '',
					! empty( $args['placeholder'] ) ? ' placeholder="' . esc_attr( $args['placeholder'] ) . '"' : ''
				);
				if ( ! empty( $args['description'] ) ) {
					$html .= sprintf( '<p class="description">%s</p>', $args['description'] );//phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				}
				break;
			case 'number':
				$html .= sprintf(
					'<input name="postcodex_lookup_settings[%1$s]" type="number" id="%1$s" value="%2$s" class="regular-text%3$s"%4$s%5$s%6$s>',
					esc_attr( $key ),
					esc_attr( $value ),
					! empty( $args['class'] ) ? ' ' . esc_attr( $args['class'] ) : '',
					! empty( $args['placeholder'] ) ? ' placeholder="' . esc_attr( $args['placeholder'] ) . '"' : '',
					! empty( $args['min'] ) ? ' min="' . esc_attr( $args['min'] ) . '"' : '',
					! empty( $args['max'] ) ? ' max="' . esc_attr( $args['max'] ) . '"' : '',
				);
				if ( ! empty( $args['description'] ) ) {
					$html .= sprintf( '<p class="description">%s</p>', $args['description'] );//phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				}
				break;
			case 'color-picker':
				$html .= sprintf(
					'<input name="postcodex_lookup_settings[%1$s]" type="text" id="%1$s" value="%2$s" class="pl-color-picker%3$s"%4$s>',
					esc_attr( $key ),
					esc_attr( $value ),
					! empty( $args['class'] ) ? ' ' . esc_attr( $args['class'] ) : '',
					! empty( $args['placeholder'] ) ? ' placeholder="' . esc_attr( $args['placeholder'] ) . '"' : ''
				);
				if ( ! empty( $args['description'] ) ) {
					$html .= sprintf( '<p class="description">%s</p>', $args['description'] );//phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				}
				break;
			case 'checkbox':
				$html .= sprintf(
					'<label for="%1$s"><input name="postcodex_lookup_settings[%1$s]" type="checkbox" id="%1$s" value="yes"%2$s />%3$s</label>',
					esc_attr( $key ),
					checked( $value, 'yes', false ),
					! empty( $args['description'] ) ? $args['description'] : '' //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				);
				break;
			default:
				$html .= apply_filters( 'postcodex_lookup_settings_type', $html, $args );
		}

		echo apply_filters( 'postcodex_lookup_settings_field', $html );// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	/**
	 * Adds plugin admin page
	 */
	public function admin_menu() {

		$this->admin_page_hook = add_menu_page(
			__( 'Postcodex Lookup', 'postcodex-lookup' ),
			'postcodex.io',
			'manage_options',
			$this->slug,
			array( $this, 'render_page' ),
			plugins_url( 'assets/images/postcodex-icon.png', POSTCODEX_LOOKUP_PLUGIN_FILE )
		);
	}

	/**
	 * Renders admin page
	 */
	public function render_page() {

		require_once POSTCODEX_LOOKUP_PLUGIN_DIR_PATH . 'templates/admin-page.php';
	}
}
