/**
 * External Dependencies
 */

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal Dependencies
 */
import { attributes } from './block.json';

const deprecated = [
	{
		attributes: {
			...attributes,
		},
		supports: {},
		save( props ) {
			const {
				attributes: {
					// put attribute key names here to use them
				},
			} = props;

			return (
				<div { ...useBlockProps.save() }>
					<p className="text-xl border-2 rounded-xl border-solid p-10 shadow-xl">
						{ __(
							'This is a static starter block.  This block is great for getting up and running fast.  Throw whatever html markup you want in here to start building something cool.  Edit this file in src/blocks/static-block/edit.js.',
							'style-block'
						) }
					</p>
				</div>
			);
		},
	},
];

export default deprecated;
