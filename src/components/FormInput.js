import PropTypes from 'prop-types';

const FormInput = (props) => {
  const { title, type, name, value, onChange } = props;
  return (
    <div className="input-groups">
      <span className="label">{title}</span>
      <div className="range-container">
        <input
          type={type}
          name={name}
          className="range-input"
          value={value}
          onChange={onChange}
          autoComplete="false"
        />
      </div>
    </div>
  );
};

FormInput.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['text']),
};

export default FormInput;
