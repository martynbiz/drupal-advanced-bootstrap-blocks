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
  title: __( 'Form textarea group (BS4)', 'advanced-bootstrap-blocks' ),
  description: __(''),
  icon: icon,
  category: 'advanced-bootstrap-blocks',
  keywords: [
      __('advanced-bootstrap-blocks'),
      __('text'),
      __('textarea'),
  ],
  supports: {
    anchor: true,
  },
  attributes: {
    label: {
      type: 'string',
      default: '',
    },
    placeholder: {
      type: 'string',
      default: ''
    },
    name: {
      type: 'string',
      default: ''
    },
    id: {
      type: 'string',
      default: ''
    },
    defaultValue: {
      type: 'string',
      default: ''
    },
    rows: {
      type: 'number',
      default: 3
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
  'advanced-bootstrap-blocks/form-group-textarea', 
  settings
);

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'advanced-bootstrap-blocks/form-group-textarea/set-block-custom-class-name',
	setBlockCustomClassName
);