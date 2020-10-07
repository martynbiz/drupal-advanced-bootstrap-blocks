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
  title: __( 'Form input group (BS4)', 'advanced-bootstrap-blocks' ),
  description: __(''),
  icon: icon,
  category: 'advanced-bootstrap-blocks',
  keywords: [
      __('advanced-bootstrap-blocks'),
      __('text'),
      __('input'),
  ],
  supports: {
    anchor: true,
  },
  attributes: {
    type: {
      type: 'string',
      default: 'text'
    },
    label: {
      type: 'string',
      default: '',
      required: true // ??
    },
    placeholder: {
      type: 'string',
      default: ''
    },
    defaultValue: {
      type: 'string',
      default: ''
    },
    size: {
      type: 'string',
      default: ''
    },
    disabled: {
      type: 'bool',
      default: false
    },
    readonly: {
      type: 'bool',
      default: false
    },
    required: {
      type: 'bool',
      default: false
    },
  },
  edit: edit,
  save: save
}

registerBlockType(
  'advanced-bootstrap-blocks/form-group-input', 
  settings
);

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'advanced-bootstrap-blocks/form-group-input/set-block-custom-class-name',
	setBlockCustomClassName
);