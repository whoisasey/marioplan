import React from "react";

const Fields = ({ name, id, label, value, type,placeholder, onChange }) => (
  <div className="input-field">
  <label htmlFor={label}>{label}</label>
  <input
  id={id}
  name={name}
  type={type}
  value={value}
  onChange={onChange}
  placeholder={placeholder}
  />
  </div>
);

export default Fields;
