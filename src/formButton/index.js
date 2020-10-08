const { __ } = wp.i18n;

const { 
  registerBlockType 
} = wp.blocks;

import { edit } from './edit'; 
import { save } from './save'; 
import {
  setBlockCustomClassName
} from './utils'; 

import icon from '../core/icon-bootstrap.svg'; 

const settings = {
  title: __( 'Form Button (BS4)', 'advanced-bootstrap-blocks' ),
  description: __(''),
  icon: icon,
  category: 'advanced-bootstrap-blocks',
  keywords: [
      __('advanced-bootstrap-blocks'),
      __('button'),
      __('btn'),
  ],
  supports: {
    anchor: true,
  },
  attributes: {
    type: {
      type: 'string',
      default: 'default'
    },
    style: {
      type: 'string',
      default: 'btn-primary'
    },
    outline: {
      type: 'bool',
      default: false
    },
    block: {
      type: 'bool',
      default: false
    },
    text: {
      type: 'string',
      default: 'Submit'
    },
    size: {
      type: 'string',
      default: ''
    },
  },
  edit: edit,
  save: save
}

registerBlockType(
  'advanced-bootstrap-blocks/form-button', 
  settings
);

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'advanced-bootstrap-blocks/form-button/set-block-custom-class-name',
	setBlockCustomClassName
);