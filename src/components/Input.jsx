import PropTypes from "prop-types";
export const Input = ({
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
        <textarea
          type={type}
          placeholder={placeholder}
          className={`form-control ${extraclass ? extraclass : ""}`}
          onChange={onChange}
          value={value}
          name={name}
        ></textarea>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={`form-control ${extraclass ? extraclass : ""}`}
          onChange={onChange}
          value={value}
          name={name}
        />
      )}
      {errorMessage && <p className="form-error">{errorMessage}</p>}
    </div>
  );
};
Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  extraclass: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
};
