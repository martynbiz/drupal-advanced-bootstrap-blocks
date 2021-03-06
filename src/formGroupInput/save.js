export const save = (props) => {
  
  const {
    attributes: {
      anchor,
      type,
      placeholder,
      size,
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
      <input 
        type={type} 
        value={defaultValue} 
        class={ ["form-control", size].join(" ").trim() } 
        id={id} 
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        required={required}
        readOnly={readonly} />
    </div>
  );
}