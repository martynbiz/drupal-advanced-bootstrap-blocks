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
      placeholder,
      rows,
      label,
      name,
      id,
      defaultValue,
      disabled, 
      required, 
      readonly 
    },
    className,
    setAttributes
  } = props;

  return (
    <Fragment>
      <div 
        {...anchor ? { id: anchor } : {} } 
        className={[className, "form-group"].join(" ")} 
        >
        <label>{label}</label>
        <textarea 
          name={name} 
          class="form-control"
          placeholder={placeholder} 
          rows={rows} 
          readOnly>{defaultValue}</textarea>
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
            <TextControl
              label="Default value"
              value={ defaultValue }
              onChange={ ( defaultValue ) => setAttributes( { defaultValue } ) }
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label="Placeholder"
              value={ placeholder }
              onChange={ ( placeholder ) => setAttributes( { placeholder } ) }
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label="Rows"
              value={ rows }
              onChange={ ( rows ) => setAttributes( { rows } ) }
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
                  htmlFor="form-toggle-readonly"
              >
                  { __( 'Read only', 'advanced-bootstrap-blocks' ) }
              </label>
              <FormToggle
                  id="form-toggle-readonly"
                  label={ __( 'Read only', 'advanced-bootstrap-blocks' ) }
                  checked={readonly}
                  onChange={ () => setAttributes( { readonly: !readonly } ) }
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