const { __ } = wp.i18n;

const { 
  registerBlockType,
  getBlockDefaultClassName
} = wp.blocks;

const {
  Fragment
} = wp.element; 

const {
  InnerBlocks
} = wp.blockEditor;

import { edit } from './edit'; 
import { save } from './save'; 
import {
  modifyBlockListBlockJumbotron, 
  modifyGetSaveElementJumbotron,
  setBlockCustomClassName,
  setBlockAttributes,
} from './utils'; 

import icon from '../core/icon-bootstrap.svg'; 

const defaultClassName = getBlockDefaultClassName("advanced-bootstrap-blocks/jumbotron");

const settings = {
  title: __( 'Jumbotron (BS4)', 'advanced-bootstrap-blocks' ),
  description: __(''),
  icon: icon,
  category: 'advanced-bootstrap-blocks',
  keywords: [
      __('advanced-bootstrap-blocks'),
      __('jumbotron'),
  ],
  supports: {
    anchor: true,
  },
  attributes: {
    classNameFilter: {
      type: 'string',
      default: ''
    },
    isFluid: {
      type: 'bool',
      default: false
    },
    // isWrapped: {
    //   type: 'bool',
    //   default: false
    // },
    backgroundImage: {
      type: 'object',
      default: {},
    },
    backgroundSize: {
      type: 'string',
      default: ''
    },
    backgroundRepeat: {
      type: 'string',
      default: ''
    },
    backgroundPosition: {
      type: 'object',
      default: {},
    },
    backgroundAttachment: {
      type: 'string',
      default: ''
    },
    // allowedBlocks: ['advanced-bootstrap-blocks/row'],
    TEMPLATE: {
      type: 'array',
      default: [
        ['core/heading', { content: 'Hello, world!', attributes: { level: 1 } } ],
        ['core/paragraph', { content: 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.', attributes: { class: 'lead' } } ],
        // ['core/separator', {} ],
        // ['core/paragraph', { content: 'It uses utility classes for typography and spacing to space content out within the larger container.' } ],
        // ['advanced-bootstrap-blocks/button', { text: 'Learn more' } ]
      ]
    }
  },
  edit: edit,
  save: save,
} 

registerBlockType( 
  'advanced-bootstrap-blocks/jumbotron', 
  settings
);

wp.hooks.addFilter( 
  'editor.BlockListBlock', 
  'advanced-bootstrap-blocks/jumbotron/modify-element-edit', 
  modifyBlockListBlockJumbotron
);

wp.hooks.addFilter(
  'blocks.getSaveElement', 
  'advanced-bootstrap-blocks/jumbotron/modify-element-save', 
  modifyGetSaveElementJumbotron
);

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'advanced-bootstrap-blocks/jumbotron/set-block-custom-class-name',
	setBlockCustomClassName
);

// wp.hooks.addFilter(
// 	'blocks.getBlockAttributes',
// 	'advanced-bootstrap-blocks/jumbotron/set-block-attributes',
// 	setBlockAttributes
// );


// const fixForRenamedBlockClassNames = (props, blockType, attributes) => {
//   if (blockType.name === 'advanced-bootstrap-blocks/jumbotron') {
//       if (props.className.includes(defaultClassName)) {
//           props.className = props.className.replace(`${defaultClassName} `, '');
//       }
//   }
//   return props;
// };

// wp.hooks.addFilter(
//   'blocks.getSaveContent.extraProps',
//   'advanced-bootstrap-blocks/jumbotron/block-filters',
//   fixForRenamedBlockClassNames
// );