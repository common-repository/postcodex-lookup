<?php
/**
 * Postcodex Lookup metabox markup template
 *
 * @package Postcodex_Lookup
 */

use \Postcodex_Lookup\Admin_Page;
use Postcodex_Lookup\Index;

defined( 'ABSPATH' ) || exit;

/**
 * @var Index    $this
 * @var \WP_Post $post
 */

$autosearch_options = array(
	'default' => __( 'Default value in settings' ),
	'yes'     => __( 'Yes' ),
	'no'      => __( 'No' ),
);

wp_nonce_field( 'save-postcodex-lookup-selector-override', '_postcodex_nonce' );
?>
<div class="components-base-control">
	<div class="components-base-control__field">
	<span class="components-checkbox-control__input-container">
		<input
			id="pl_load"
			type="checkbox"
			value="yes"
			name="pl_load"
			<?php checked( get_post_meta( $post->ID, 'pl_load', true ), 'yes' ); ?>
		/>
	</span>
		<label
			class="components-checkbox-control__label" for="pl_load"
		><?php esc_html_e( 'Load postcodex lookup', 'postcodex-lookup' ); ?></label>
	</div>
</div>
<div class="components-base-control">
	<div class="components-base-control__field">
		<label
			class="components-base-control__label" for="pl_autosearch"
		><?php esc_html_e( 'Enable auto address lookup', 'postcodex-lookup' ); ?></label>
		<select
			id="pl_autosearch" name="pl_autosearch"
			class="components-select-control__input"
			style="max-width: 86%;"
		>
			<?php foreach ( $autosearch_options as $option_value => $option_label ) : ?>
				<option
					value="<?php echo esc_attr( $option_value ); ?>"<?php selected( get_post_meta( $post->ID, 'pl_autosearch', true ), $option_value ); ?>
				><?php echo $option_label;// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></option>
			<?php endforeach; ?>
		</select>
	</div>
</div>
<div class="components-base-control">
	<div class="components-base-control__field">
	<span class="components-checkbox-control__input-container">
		<input
			id="pl_override_selector"
			type="checkbox"
			value="yes"
			name="pl_override_selector"
			<?php checked( get_post_meta( $post->ID, 'pl_override_selector', true ), 'yes' ); ?>
		/>
	</span>
		<label
			class="components-checkbox-control__label" for="pl_override_selector"
		><?php esc_html_e( 'Override default selectors', 'postcodex-lookup' ); ?></label>
	</div>
</div>
<?php foreach ( Admin_Page::instance()->form_fields as $option_key => $option_data ) : ?>
	<?php if ( '_selector' === mb_substr( $option_key, -9 ) ) : ?>
		<?php
		$value = get_post_meta( $post->ID, $option_key, true );
		$value = ! empty( $value ) ? $value : '';

		$placeholder = sprintf(/* translators: %s = default value */
			__( 'Defaults to: %s', 'postcodex-lookup' ),
			$option_data['default']
		);
		?>
		<div class="components-base-control">
			<div class="components-base-control__field">
				<label
					class="components-base-control__label" for="<?php echo esc_attr( $option_key ); ?>"
				><?php echo esc_html( esc_html( $option_data['title'] ) ); ?></label>
				<input
					class="components-text-control__input"
					type="text"
					id="<?php echo esc_attr( $option_key ); ?>"
					value="<?php echo esc_attr( $value ); ?>"
					name="<?php echo esc_attr( $option_key ); ?>"
					placeholder="<?php echo esc_attr( $placeholder ); ?>"
				/>
			</div>
		</div>
	<?php endif; ?>
<?php endforeach; ?>
