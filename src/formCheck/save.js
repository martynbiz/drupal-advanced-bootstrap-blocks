export const save = (props) => {
  
  const {
    attributes: {
      anchor,
      type,
      label,
      name,
      id,
      disabled,
      required,
      defaultValue,
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
        class={ ["form-control"].join(" ").trim() } 
        id={id} 
        name={name}
        disabled={disabled}
        required={required} />
    </div>
  );
}