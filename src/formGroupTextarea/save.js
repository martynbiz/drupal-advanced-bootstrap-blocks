export const save = (props) => {
  
  const {
    attributes: {
      anchor,
      placeholder,
      rows,
      label,
      name,
      id,
      disabled,
      readonly,
      required,
      defaultValue
    },
    className
  } = props;
  
  return (
    <div
    {...anchor ? { id: anchor } : { } }
    className={
      [
        "form-group", 
        typeof props.className !== "undefined" && props.className.length ? props.className : []
      ]
        .join(" ")
        .replace(/\s\s+/g, ' ')
    }
    >
      <label for={id}>{label}</label>
      <textarea 
        class={ ["form-control"].join(" ").trim() } 
        id={id} 
        rows={rows}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        required={required}
        readOnly={readonly}>{defaultValue}</textarea>
    </div>
  );
}