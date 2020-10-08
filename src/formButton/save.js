import {
  buttonStyle
} from './utils'; 

export const save = (props) => {
  return (
    <button 
      {...props.attributes.anchor ? { id: props.attributes.anchor } : { } }
      className={
        ["btn", typeof props.className !== "undefined" && props.className.length ? props.className : [], props.attributes.size.length ? props.attributes.size : [], buttonStyle(props.attributes)]
          .join(" ")
          .replace(/\s\s+/g, ' ')
      }
    >
      {props.attributes.text}
    </button>
  );
}