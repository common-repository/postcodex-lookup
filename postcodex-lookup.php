<?php
/**
 * Plugin Name: Postcodex Lookup
 * Plugin URI: https://postcodex.io/docs/wordpress/
 * Description: Plugin to find UK addresses from postcodes using Postcodex API.
 * Version: 1.0.1
 * Author: postcodex
 * Author URI: https://postcodex.io/
 * License: GPL v2 or later
 * Text Domain: postcodex-lookup
 * Domain Path: /languages
 *
 * @package  Postcodex_Lookup
 * @author   Postcodex <david@postcodex.io>
 * @license  GPL v2 or later
 * @link     https://postcodex.io/
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( 'You are not allowed to call this page directly.' );
}

define( 'POSTCODEX_LOOKUP_PLUGIN_FILE', __FILE__ );
define( 'POSTCODEX_LOOKUP_PLUGIN_DIR_PATH', plugin_dir_path( __FILE__ ) );

/**
 * Load plugin textdomain.
 */
function postcodex_lookup_textdomain() {

	load_plugin_textdomain( 'postcodex-lookup', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
}

add_action( 'plugins_loaded', 'postcodex_lookup_textdomain' );

if ( version_compare( PHP_VERSION, '7.3', '<' ) ) {
	/**
	 * Admin notice for required PHP version to run the plugin
	 */
	function postcodex_lookup_required_php_version() {

		?>
		<div class="error" id="message">
			<p>
				<?php
				printf( /* translators: %s: current server PHP version */
					esc_html__(
						'Postcodex Lookup plugin requires at least PHP 7.3 to work properly. Your server is currently using PHP %s.',
						'postcodex-lookup'
					),
					PHP_VERSION
				);
				?>
			</p>
		</div>
		<?php
	}

	add_action( 'admin_notices', 'postcodex_lookup_required_php_version' );
} else {
	require_once 'includes/autoload.php';
}
