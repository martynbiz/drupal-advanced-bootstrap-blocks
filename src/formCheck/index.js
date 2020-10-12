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
  title: __( 'Form checkbox/radio (BS4)', 'advanced-bootstrap-blocks' ),
  description: __(''),
  icon: icon,
  category: 'advanced-bootstrap-blocks',
  keywords: [
      __('advanced-bootstrap-blocks'),
      __('checkbox'),
      __('radio'),
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
    },
    name: {
      type: 'string',
      default: '',
    },
    id: {
      type: 'string',
      default: '',
    },
    disabled: {
      type: 'bool',
      default: false
    },
    selected: {
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
  'advanced-bootstrap-blocks/form-check', 
  settings
);

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'advanced-bootstrap-blocks/form-check/set-block-custom-class-name',
	setBlockCustomClassName
);