import PropTypes from 'prop-types'
import React from 'react'

const FormInput = ({ label }) => (
  <div className="col-md-6">
    <div className="form-group mb-0">
      <input
        type="text"
        id={'form-contact-' + label}
        className="form-control"
        placeholder={'Your ' + label}
      />
      <label htmlFor={'form-contact-' + label} hidden>
        Your {label}
      </label>
    </div>
  </div>
)

FormInput.propTypes = {
  label: PropTypes.string,
}

FormInput.defaultProps = {
  label: 'name',
}

export default FormInput
