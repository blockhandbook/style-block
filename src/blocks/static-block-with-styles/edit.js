/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	BlockControls,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';

/**
 * Internal Dependencies
 */

const Edit = ( props ) => {
	const {
		setAttributes,
		attributes: {
			className,
			// put attribute key names here to use them
		},
	} = props;

	return (
		<>
			<BlockControls></BlockControls>
			<InspectorControls></InspectorControls>
			<div { ...useBlockProps( { className } ) }>
				<h2>{ __( 'This is a static starter block with styles.', 'style-block' ) }</h2>
				<p>{ __( 'Styles defined in the src/blocks/static-block-with-styles/index.js can be added to a block and styled for the frontend in src/blocks/static-block-with-styles/style.scss.', 'style-block' ) }</p>
				<p>{ __( 'Editor only styles can be placed in src/blocks/static-block-with-styles/edit.scss.', 'style-block' ) }</p>
				<p>{ __( 'i.e. - style name light would generate the class is-style-light that you can then use to create a unique block style.', 'style-block' ) }</p>
				<p>{ __( 'Edit this file in src/blocks/static-block-with-styles/edit.js.', 'style-block' ) }</p>
			</div>
		</>
	);
};

export default Edit;
