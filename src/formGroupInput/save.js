export const save = (props) => {
  
  const {
    attributes: {
      anchor,
      type,
      placeholder,
      size,
      label,
      disabled,
      readonly,
      required,
      defaultValue
    },
    className
  } = props;

  const inputId = "formControl_";
  
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
      <label for={inputId}>{label}</label>
      <input 
        type={type} 
        value={defaultValue} 
        class={ ["form-control", size].join(" ").trim() } 
        id={inputId} 
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        readOnly={readonly} />
    </div>
  );
}