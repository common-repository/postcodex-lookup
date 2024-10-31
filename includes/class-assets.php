<?php
/**
 * Author: postcodex
 * Date: 2018/08/26
 * Time: 5:51 AM
 *
 * @package Postcodex_Lookup
 */

namespace Postcodex_Lookup;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'You are not allowed to call this page directly.' );
}

/**
 * Class Assets
 *
 * @package Postcodex_Lookup
 */
class Assets {

	/**
	 * Holds the class instance object
	 *
	 * @var Assets $instance object
	 */
	protected static $instance;

	/**
	 * Holds the list of js file paths/uris
	 *
	 * @var array $js
	 */
	protected $js;

	/**
	 * Holds the list of blocks js file paths/uris
	 *
	 * @var array $blocks
	 */
	protected $blocks = array();

	/**
	 * Current page active blocks as determined by core has_blocks method
	 *
	 * @var array has_blocks
	 */
	protected $has_blocks = array();

	/**
	 * Holds the list of css file paths/uris
	 *
	 * @var array $css
	 */
	protected $css;

	/**
	 * Stores active dev/dist asset path.
	 *
	 * @var string
	 */
	protected $dir;

	/**
	 * Stores .min if active for dev mode.
	 *
	 * @var string
	 */
	protected $ext;

	/**
	 * Holds the public path URL.
	 *
	 * @var string
	 */
	protected $public_path;

	/**
	 * Whether in dev mode or production.
	 *
	 * @var bool
	 */
	protected $dev_mode;

	/**
	 * Whether in HMR dev mode or not.
	 *
	 * @var bool
	 */
	protected $hmr_dev;

	/**
	 * Assets constructor
	 *
	 * @codeCoverageIgnore
	 */
	public function __construct() {

		$this->dev_mode = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG;
		$this->hmr_dev  = $this->dev_mode && defined( 'HMR_DEV' ) && HMR_DEV;
		$this->dir      = $this->dev_mode ? 'dev' : 'dist';
		$this->blocks   = array();
		$this->ext      = $this->dev_mode ? '' : '.min';
		$protocol       = is_ssl() ? 'https:' : 'http:';

		$this->public_path = $this->hmr_dev
			? "{$protocol}//localhost:3000/assets/{$this->dir}"
			: plugins_url( "assets/{$this->dir}", POSTCODEX_LOOKUP_PLUGIN_FILE );
	}

	/**
	 * @param array $js
	 *
	 * @codeCoverageIgnore
	 */
	public function set_js( array $js ) {

		$this->js = $js;
	}

	/**
	 * @param array $css
	 *
	 * @codeCoverageIgnore
	 */
	public function set_css( array $css ) {

		$this->css = $css;
	}

	/**
	 * @param string $dir
	 *
	 * @codeCoverageIgnore
	 */
	public function set_dir( string $dir ) {

		$this->dir = $dir;
	}

	/**
	 * @param string $ext
	 *
	 * @codeCoverageIgnore
	 */
	public function set_ext( string $ext ) {

		$this->ext = $ext;
	}

	/**
	 * @param string $public_path
	 */
	public function set_public_path( string $public_path = '' ): void {

		if ( $public_path ) {
			// @codeCoverageIgnoreStart
			$this->public_path = $public_path;
			// @codeCoverageIgnoreEnd
		} else {
			$protocol  = is_ssl() ? 'https:' : 'http:';
			$this->dir = $this->dev_mode ? 'dev' : 'dist';

			$this->public_path = $this->hmr_dev
				? "{$protocol}//localhost:3000/assets/{$this->dir}"
				: plugins_url( "assets/{$this->dir}", POSTCODEX_LOOKUP_PLUGIN_FILE );
		}
	}

	/**
	 * @param bool $dev_mode
	 */
	public function set_dev_mode( bool $dev_mode ): void {

		$this->dev_mode = $dev_mode;
	}

	/**
	 * @param bool $hmr_dev
	 */
	public function set_hmr_dev( bool $hmr_dev ): void {

		$this->hmr_dev = $hmr_dev;
	}

	/**
	 * Return an instance of this class
	 *]
	 *
	 * @return Assets The class instance object
	 * @codeCoverageIgnore
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
	 * @param string $key Class property key to retrieve.
	 *
	 * @return null|mixed
	 * @codeCoverageIgnore
	 */
	public function __get( $key ) {

		return $this->$key ?? null;
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

	}

	/**
	 * Filter hooks
	 *
	 * @codeCoverageIgnore
	 */
	protected function filters() {

	}

	/**
	 * Enqueue block runtime and vendor scripts.
	 */
	protected function enqueue_runtime_vendor_scripts() {

		if ( ! wp_script_is( 'postcodex-lookup-manifest' ) ) {
			$version = $this->hmr_dev ? time() : filemtime( POSTCODEX_LOOKUP_PLUGIN_DIR_PATH . "assets/{$this->dir}/manifest.js" );
			wp_enqueue_script( 'postcodex-lookup-manifest', "{$this->public_path}/manifest.js", array( 'react', 'react-dom', 'lodash', 'jquery' ), $version, true );
			$version = $this->hmr_dev ? time() : filemtime( POSTCODEX_LOOKUP_PLUGIN_DIR_PATH . "assets/{$this->dir}/vendor.js" );
			wp_enqueue_script( 'postcodex-lookup-vendor', "{$this->public_path}/vendor.js", array( 'postcodex-lookup-manifest' ), $version, true );

			$i18n = array(
				'apiUrl'     => REST::instance()->api_url,
				'restNonce'  => REST::instance()->nonce,
				'publicPath' => $this->public_path,
				'isLoggedIn' => is_user_logged_in(),
			);
			wp_localize_script( 'postcodex-lookup-manifest', 'postcodexLookupObj', $i18n );
		}
	}

	/**
	 * Get file version - based on filemtime() output or time() if HMR is enabled
	 *
	 * @param string $file
	 *
	 * @return false|int
	 */
	protected function get_file_version( $file ) {

		$file = ltrim( $file, '/' );

		return $this->hmr_dev ? time() : filemtime( POSTCODEX_LOOKUP_PLUGIN_DIR_PATH . "assets/{$this->dir}/{$file}" );
	}

	/**
	 * Get postcodex lookup suggestion style customization
	 *
	 * @return string
	 */
	protected function get_style_customization() {

		$options = Index::instance()->get_option();
		$options = array_intersect_key( $options, Admin_Page::instance()->style_fields );

		$style = '';

		$search_btn_style = array();
		if ( ! empty( $options['search_btn_color'] ) ) {
			$search_btn_style[] = "background: {$options['search_btn_color']};";
		}
		if ( ! empty( $options['search_font_color'] ) ) {
			$search_btn_style[] = "color: {$options['search_font_color']};";
		}
		if ( ! empty( $search_btn_style ) ) {
			$search_btn_style = implode( PHP_EOL . "\t", $search_btn_style );

			$style .= <<<CSS
.pl-search-addresses-btn.btn.btn-secondary {
	{$search_btn_style}
}
CSS;
		}

		$suggestion_container_style = array();
		if ( ! empty( $options['dropdown_bg_color'] ) ) {
			$suggestion_container_style[] = "background: {$options['dropdown_bg_color']};";
		}
		if ( ! empty( $options['dropdown_bg_color'] ) ) {
			$suggestion_container_style[] = "height: {$options['suggestion_box_height']}px;";
			$suggestion_container_style[] = 'max-height: inherit;';
		}

		if ( ! empty( $suggestion_container_style ) ) {
			$suggestion_container_style = implode( PHP_EOL . "\t", $suggestion_container_style );

			$style .= <<<CSS
.pl-custom.pl-autosuggest-address {
	{$suggestion_container_style}
}
CSS;
		}

		if ( ! empty( $options['dropdown_item_even_color'] ) ) {
			$style .= <<<CSS
.pl-custom.pl-autosuggest-address .postcodex-lookup-app .search-results-container .result-item:nth-child(even) {
	background: {$options['dropdown_item_even_color']};
}
CSS;
		}

		if ( ! empty( $options['suggestions_font_size'] ) ) {
			$style .= <<<CSS
.pl-custom.pl-autosuggest-address .postcodex-lookup-app .search-results-container .result-item {
	font-size: {$options['suggestions_font_size']}px;
}
CSS;
		}

		if ( ! empty( $options['dropdown_item_odd_color'] ) ) {
			$style .= <<<CSS
.pl-custom.pl-autosuggest-address .postcodex-lookup-app .search-results-container .result-item:nth-child(odd) {
	background: {$options['dropdown_item_odd_color']};
}
CSS;
		}

		if ( ! empty( $options['highlight_color'] ) ) {
			$style .= <<<CSS
.pl-custom.pl-autosuggest-address .postcodex-lookup-app .search-results-container .result-item:hover {
	background: {$options['highlight_color']};
}
CSS;
		}

		return apply_filters( 'postcodex_lookup_customization_inline_style', $style, $options );
	}

	/**
	 * Enqueue settings page app
	 */
	public function enqueue_address_lookup_app() {

		$this->enqueue_runtime_vendor_scripts();

		$handle = 'autosuggest-address';

		$file = 'apps/autosuggest-address/index';
		wp_enqueue_style(
			$handle,
			"{$this->public_path}/{$file}.css",
			array(),
			$this->get_file_version( "{$file}.css" )
		);
		wp_add_inline_style( $handle, $this->get_style_customization() );

		wp_enqueue_script(
			$handle,
			"{$this->public_path}/{$file}.js",
			array( 'postcodex-lookup-vendor' ),
			$this->get_file_version( "{$file}.js" ),
			true
		);

		$autosearch = get_post_meta( get_the_ID(), 'pl_autosearch', true );
		$i18n       = array(
			'autosearch'       => ( ! $autosearch || 'default' === $autosearch ) ? Index::instance()->get_option( 'autosearch', 'no' ) : $autosearch,
			'address1Selector' => Index::instance()->get_selector( get_the_ID(), 'address1_selector' ),
			'address2Selector' => Index::instance()->get_selector( get_the_ID(), 'address2_selector' ),
			'citySelector'     => Index::instance()->get_selector( get_the_ID(), 'city_selector' ),
			'countrySelector'  => Index::instance()->get_selector( get_the_ID(), 'country_selector' ),
			'postcodeSelector' => Index::instance()->get_selector( get_the_ID(), 'postcode_selector' ),
			'isCheckout'       => function_exists( 'is_checkout' ) && is_checkout(),
		);
		wp_localize_script( $handle, 'plAutosuggestAddrObj', apply_filters( 'postcodex_lookup_autosuggest_address_i18n', $i18n ) );
	}

	/**
	 * Enqueue admin page settings app
	 */
	public function enqueue_admin_settings_app() {

		$this->enqueue_runtime_vendor_scripts();

		$handle = 'admin-page';

		$file = 'apps/admin-page/index';

		wp_enqueue_style(
			$handle,
			"{$this->public_path}/{$file}.css",
			array( 'wp-color-picker' ),
			$this->get_file_version( "{$file}.css" ),
		);

		wp_enqueue_script(
			$handle,
			"{$this->public_path}/{$file}.js",
			array( 'postcodex-lookup-vendor', 'jquery', 'lodash', 'wp-color-picker' ),
			$this->get_file_version( "{$file}.js" ),
			true
		);
	}
}
