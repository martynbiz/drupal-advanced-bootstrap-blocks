const { __ } = wp.i18n;

const {
  Fragment
} = wp.element; 

const {
  SelectControl,
  RadioControl,
  BaseControl,
  PanelBody,
  PanelRow,
  FormToggle,
  TextControl,
} = wp.components;

const {
  InspectorControls,
} = wp.blockEditor;

export const edit = (props) => {
  const {
    attributes: {
      anchor,
      type,
      label,
      name,
      id,
      defaultValue,
      disabled, 
      required, 
      selected 
    },
    className,
    setAttributes
  } = props;

  return (
    <Fragment>
      <div 
        {...anchor ? { id: anchor } : {} } 
        className={[className, "form-check"].join(" ")} 
        >
        <label>{label}</label>
        <input 
          type={type} 
          name={name} 
          value={defaultValue} 
          class={ ["form-check-input"].join(" ").trim() } 
          readOnly/>
      </div>
      <InspectorControls>
        <PanelBody
            title={ __( 'Form Input Settings', 'advanced-bootstrap-blocks' ) }
          >
          <PanelRow>
            <TextControl
              label="Name"
              value={ name }
              onChange={ ( name ) => setAttributes( { name } ) }
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label="ID"
              value={ id }
              onChange={ ( id ) => setAttributes( { id } ) }
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label="Label"
              value={ label }
              onChange={ ( label ) => setAttributes( { label } ) }
            />
          </PanelRow>
          <PanelRow>
            <SelectControl
              label="Input Type"
              value={ type }
              options={ [
                  { label: 'Checkbox', value: 'checkbox' },
                  { label: 'Radio', value: 'radio' },
              ] }
              onChange={ ( type ) => setAttributes( { type } ) }
            />
          </PanelRow>
          <PanelRow>
            <label
              htmlFor="form-toggle-disabled"
              >
              { __( 'Disabled', 'advanced-bootstrap-blocks' ) }
            </label>
            <FormToggle
              id="form-toggle-disabled"
              label={ __( 'Disabled', 'advanced-bootstrap-blocks' ) }
              checked={disabled}
              onChange={ () => setAttributes( { disabled: !disabled } ) }
            />
          </PanelRow>
          <PanelRow>
              <label
                  htmlFor="form-toggle-selected"
              >
                  { __( 'Selected', 'advanced-bootstrap-blocks' ) }
              </label>
              <FormToggle
                  id="form-toggle-selected"
                  label={ __( 'Selected', 'advanced-bootstrap-blocks' ) }
                  checked={selected}
                  onChange={ () => setAttributes( { selected: !selected } ) }
              />
          </PanelRow>
          <PanelRow>
              <label
                  htmlFor="form-toggle-readonly"
              >
                  { __( 'Required', 'advanced-bootstrap-blocks' ) }
              </label>
              <FormToggle
                  id="form-toggle-readonly"
                  label={ __( 'Required', 'advanced-bootstrap-blocks' ) }
                  checked={required}
                  onChange={ () => setAttributes( { required: !required } ) }
              />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
    </Fragment>
  );
}