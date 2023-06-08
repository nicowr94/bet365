import React from "react";
import "./InputForm.css";

export default function InputForm({ name, type="input", defaultValue, placeholder, options }) {

  let input_dom = <div className="a-InputForm-input-content">
                    <input type={type} className="a-InputForm-input" placeholder={placeholder} defaultValue={defaultValue}></input>
                  </div>

  if (type === "select") {
    input_dom =  <div className="a-InputForm-input-select">
                  <div className="a-InputForm-input-select--icon"></div>
                  <select>
                    {options.map((option) => (
                      <option value={option.label} selected={option.selected}>{option.label}</option>
                    ))}
                  </select>
                </div>
  }

  if (type === "texArea") {
    input_dom =  <div className="a-InputForm-input-content">
                  <textarea type={type} className="a-InputForm-input" placeholder={placeholder} defaultValue={defaultValue}></textarea>
                </div>
  }
  return (
    <div className="a-InputForm">

      {name || name==="" ? <label>{name}</label> : null}
      {input_dom}
    </div>
  );
}
