import React from "react";
import './input.css';

const CustomInput = props => {
  const { error, startIcon, endIcon, disable, helperText, value, size, fullwidth, multiline, row } = props
  
  return (
    <div className="input-group" id={error ? "error" : ""}>
      <div className="label" style={{color: error ? "#D32F2F" : "#333333"}}>Label</div>
      {startIcon ? <span class="material-icons start-icon">call</span> : <div></div>}
      {
        multiline ? 
          <textarea className="input" rows={row} placeholder="Placeholder">{value}</textarea>
        : 
          <input 
            className={"input " + (startIcon ? "hasIcon" : "") + " " + size}
            defaultValue={value} 
            placeholder="Placeholder" 
            disabled={disable}
            style={{
              width: fullwidth ? "100%" : "200px",
              paddingLeft: startIcon ? "40px" : "12px",
            }}
          />
      }
      {endIcon ? <span class="material-icons end-icon">lock</span> : <div></div>}
      {helperText ? <span className="helperText">{helperText}</span> : <div></div>}
    </div>
  )
};

export default CustomInput;
