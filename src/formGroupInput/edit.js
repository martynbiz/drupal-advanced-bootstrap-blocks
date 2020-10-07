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
  // URLInputButton,
} = wp.blockEditor;

// import {
//   buttonStyle,
//   getCaretPosition,
//   setCaretPosition
// } from './utils'; 

export const edit = (props) => {
  const {
    attributes: {
      anchor,
      type,
      placeholder,
      size,
      label,
      defaultValue,
      disabled, 
      required, 
      readonly 
    },
    className,
    setAttributes
  } = props;

  const inputId = "formControl_";

  return (
    <Fragment>
      <div
        {...anchor ? { id: anchor } : {} }
        className={[className, "form-group"].join(" ")} 
        >
        <label>{label}</label>
        <input type={type} value={defaultValue} class={ ["form-control", size].join(" ").trim() } placeholder={placeholder} readOnly/>
      </div>
      <InspectorControls>
        <PanelBody
            title={ __( 'Form Input Settings', 'advanced-bootstrap-blocks' ) }
          >
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
            <SelectControl
              label="Input Type"
              value={ type }
              options={ [
                  { label: 'Color', value: 'color' },
                  { label: 'Date', value: 'date' },
                  { label: 'Email', value: 'email' },
                  { label: 'Datetime Local', value: 'datetime-local' },
                  { label: 'File', value: 'file' },
                  // { label: 'Hidden', value: 'hidden' },
                  { label: 'Image', value: 'image' },
                  { label: 'Month', value: 'month' },
                  { label: 'Password', value: 'password' },
                  // { label: 'Range', value: 'range' },
                  { label: 'Tel', value: 'tel' },
                  { label: 'Text', value: 'text' },
                  { label: 'Time', value: 'time' },
                  { label: 'URL', value: 'url' },
                  { label: 'Week', value: 'week' },
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
          <PanelRow>
            <RadioControl
                label="Input size"
                help=""
                selected={ size }
                options={ [
                  { label: 'Default', value: '' },
                  { label: 'Large', value: 'form-control-lg' },
                  { label: 'Small', value: 'form-control-sm' },
                ] }
                onChange={ ( size ) => setAttributes( { size } ) }
              />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
    </Fragment>
  );
}