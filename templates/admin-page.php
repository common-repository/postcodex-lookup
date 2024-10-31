<?php
/**
 * Postcodex Lookup plugin admin page template
 *
 * @package Postcodex_Lookup
 * @since   1.0.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Variables
 *
 * @var \Postcodex_Lookup\Admin_Page $this
 */
?>
<div id="postcodex-lookup-admin-page" class="wrap">
	<h2><?php esc_html_e( 'Postcodex Lookup', 'postcodex-lookup' ); ?></h2>

	<?php settings_errors(); ?>

	<div class="postcodex-lookup-admin-page-container">
		<form method="post" action="options.php">
			<?php settings_fields( 'postcodex_lookup_settings' ); ?>
			<?php do_settings_sections( 'postcodex_lookup_settings' ); ?>
			<?php submit_button(); ?>
		</form>
		<div class="sidebar">
			<div class="section">
				<h3 class="heading"><?php esc_html_e( 'Help', 'postcodex-lookup' ); ?></h3>

				<p class="faq-q"><?php printf( esc_html__( 'Documentation', 'postcodex-lookup' ) ); ?></p>
				<p class="faq-a">
					<?php
					printf(/* translators: %1$s = opening <a> tag; %2$s = closing </a> */
						esc_html__( 'Full documentation and examples can be found %1$son this page%2$s.', 'postcodex-lookup' ),
						'<a href="https://postcodex.io/docs/wordpress/" target="_blank">',
						'</a>'
					)
					?>
				</p>
			</div>
		</div>
	</div>
</div>
