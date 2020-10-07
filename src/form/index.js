const { __ } = wp.i18n;

const { 
  createHigherOrderComponent 
} = wp.compose;

const { 
  registerBlockType,
  getBlockDefaultClassName
} = wp.blocks;

const {
  PanelBody,
  PanelRow,
  TextControl,
  SelectControl,
} = wp.components;

const {
  Fragment
} = wp.element; 

const {
  InspectorControls,
  InnerBlocks,
  URLInputButton,
} = wp.blockEditor;

import icon from '../core/icon-bootstrap.svg'; 

registerBlockType('advanced-bootstrap-blocks/form', {
  title: __('Form', 'advanced-bootstrap-blocks'),
  description: __(''),
  icon: icon,
  category: 'advanced-bootstrap-blocks',
  keywords: [
      __('advanced-bootstrap-blocks'),
      __('form'),
  ],
  supports: {
    anchor: true,
  },
  attributes: {
      customClassName: true,
      content: {
          type: 'array',
          source: 'children',
      },
      action: {
        type: 'string',
        default: '#'
      },
      method: {
        type: 'method',
        default: 'post'
      },
  },
  edit: function( props ) {
    const {
      className,
      attributes: {
        anchor,
        action,
        method,
        TEMPLATE,
      },
      setAttributes
    } = props;

    return (
      <Fragment>
        <form 
          {...anchor ? { id: anchor } : { } }
          action={action}
          method={method}
          className={className}
        >
          <InnerBlocks 
            template={ TEMPLATE }
          /> 
        </form>
        <InspectorControls>
          <PanelBody
              title={ __( 'Form Settings', 'advanced-bootstrap-blocks' ) }
            >
            <PanelRow>
              <TextControl
                label="Action"
                value={ action }
                onChange={ ( action ) => setAttributes( { action } ) }
              />
            </PanelRow>
            <PanelRow>
              <SelectControl
                label="Method"
                value={ method }
                options={ [
                    { label: 'GET', value: 'get' },
                    { label: 'POST', value: 'post' },
                ] }
                onChange={ ( method ) => setAttributes( { method } ) }
              />
            </PanelRow>
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  },
  save: function( props ) {
    return (
      <Fragment>
          <InnerBlocks.Content />
      </Fragment>
    );  
  }
});

const defaultClassName = getBlockDefaultClassName("advanced-bootstrap-blocks/form");

const setBlockCustomClassName = ( blockName ) => {
	return blockName === defaultClassName ?
    [] :
		blockName;
}

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	'advanced-bootstrap-blocks/form/set-block-custom-class-name',
	setBlockCustomClassName
);

const modifyBlockListBlockRow = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {
      if (props.block.name == "advanced-bootstrap-blocks/form") {
        props.className = ["form", props.className].join(" ").trim();
      }
      return <BlockListBlock { ...props } />;
    };
}, 'modifyBlockListBlockRow' );

wp.hooks.addFilter( 
  'editor.BlockListBlock', 
  'advanced-bootstrap-blocks/form/modify-element-edit', 
  modifyBlockListBlockRow 
);

const modifyGetSaveElementRow = (element, blockType, attributes ) => {
	if (!element) {
		return;
	}

  if (blockType.name == 'advanced-bootstrap-blocks/form') {
    return (
      <form 
        {...attributes.anchor ? { id: attributes.anchor } : { } } 
        className={ ["form", element.props.className].join(" ").trim() }
      >
        {element}
      </form>
    )
  }

	return element;
}

wp.hooks.addFilter(
  'blocks.getSaveElement', 
  'advanced-bootstrap-blocks/form/modify-element-save', 
  modifyGetSaveElementRow
);
