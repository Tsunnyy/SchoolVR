import PropTypes from "prop-types";

export const FormField = ({
  type = "text",
  placeholder,
  extraclass,
  errorMessage,
  onChange,
  value,
  name,
  className,
}) => {
  // Function to extract text from placeholder
  const extractText = (text) => {
    const regex = /<b>(.*?)<\/b>/g;
    const parts = text.split(regex);
    return parts;
  };

  const [beforeBold, boldText, afterBold] = extractText(placeholder);

  return (
    <div className={"form-group " + className}>
      {type === "textarea" ? (
        <div className="form-wrap">
          <label className="form-label" htmlFor={name}>
            {beforeBold}
            {boldText && <span>{boldText}</span>}
            {afterBold}
          </label>

          <textarea
            type={type}
            placeholder="Enter your message here..."
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
          <div className="input-wrap"></div>
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
