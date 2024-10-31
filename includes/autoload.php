<?php
if ( ! defined( 'ABSPATH' ) ) {
	die( 'You are not allowed to call this page directly.' );
}

/**
 * Class Postcodex_Lookup_Loader
 */
class Postcodex_Lookup_Loader {

	/**
	 * Called at the end of file to initialize auto loader
	 */
	public static function init() {

		try {
			spl_autoload_register( array( 'Postcodex_Lookup_Loader', 'autoload' ) );
		} catch ( Exception $exception ) {
			if ( is_admin() ) {
				add_action(
					'admin_notices',
					function () use ( $exception ) {

						?>
						<div class="error settings-error notice">
							<p><strong>ERROR:</strong> <?php echo esc_html( $exception->getMessage() ); ?></p>
						</div>
						<?php
					}
				);
			} elseif ( current_user_can( 'administrator' ) ) {
				add_action(
					'wp_footer',
					function () use ( $exception ) {

						?>
						<div class="error">
							<p class="text-danger">
								<strong>ERROR:</strong> <?php echo esc_html( $exception->getMessage() ); ?></p>
						</div>
						<?php
					}
				);
			}

			return;
		}

		/*register_activation_hook(
			POSTCODEX_LOOKUP_PLUGIN_FILE,
			array( 'Postcodex_Lookup_Loader', 'activation_actions' )
		);
		register_deactivation_hook(
			POSTCODEX_LOOKUP_PLUGIN_FILE,
			array( 'Postcodex_Lookup_Loader', 'deactivation_actions' )
		);*/

		add_action( 'plugins_loaded', array( 'Postcodex_Lookup_Loader', 'load_plugin' ), 100 );
	}

	/**
	 * Autoloader method.
	 *
	 * @param string $class The class to load.
	 */
	public static function autoload( $class ) {

		if ( 'Postcodex_Lookup' !== mb_substr( $class, 0, 16 ) ) {
			return;
		}

		$class = str_replace( '\\', '/', $class );
		$class = strtolower( mb_substr( $class, 17 ) );
		$class = sanitize_file_name( $class );
		$class = str_replace( '_', '-', $class );
		$file  = POSTCODEX_LOOKUP_PLUGIN_DIR_PATH . "includes/class-{$class}.php";

		if ( file_exists( $file ) ) {
			require_once $file;
		}
	}

	/**
	 * Load plugin
	 */
	public static function load_plugin() {

		\Postcodex_Lookup\Index::instance()->init();
	}

	/**
	 * Plugin activation actions
	 */
	public static function activation_actions() {

		flush_rewrite_rules();
	}

	/**
	 * Plugin deactivation actions
	 */
	public static function deactivation_actions() {

		flush_rewrite_rules();
	}
}

Postcodex_Lookup_Loader::init();
