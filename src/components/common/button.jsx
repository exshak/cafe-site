import React from 'react'

const Button = ({ handleChange, label, icon }) => (
  <div className="col d-flex justify-content-center">
    <button
      type="button"
      value={label}
      onClick={handleChange}
      className="gallery-button"
    >
      {icon}
      <br />
      {label.charAt(0).toUpperCase() + label.slice(1)}
    </button>
  </div>
)

export default Button
