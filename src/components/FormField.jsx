import PropTypes from "prop-types";
export const FormField = ({
  type = "text",
  placeholder,
  extraclass,
  errorMessage,
  onChange,
  value,
  name,
}) => {
  return (
    <div className="form-group">
      {type == "textarea" ? (
        <div className="form-wrap">
          <label className="form-label" htmlFor={name}>
            {placeholder}
          </label>
          <textarea
            type={type}
            placeholder={placeholder}
            className={`form-control ${extraclass ? extraclass : ""}`}
            onChange={onChange}
            value={value}
            name={name}
          ></textarea>
        </div>
      ) : (
        <div className="form-wrap">
          <label className="form-label" htmlFor={name}>
            {placeholder}
          </label>
          <div className="input-wrap">

          </div>
          <input
            type={type}
            placeholder={placeholder}
            className={`form-control ${extraclass ? extraclass : ""}`}
            onChange={onChange}
            value={value}
            name={name}
            id={name}
          />
        </div>
      )}
      {errorMessage && <p className="form-error">{errorMessage}</p>}
    </div>
  );
};
FormField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  extraclass: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
};
