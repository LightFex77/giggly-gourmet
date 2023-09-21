/* eslint-disable react/prop-types */
const Input = ({ id, labelText, placeholder }) => {
  return (
    <label htmlFor={id} className="input">
      {labelText}
      <input type="text" id={id} placeholder={placeholder} />
    </label>
  );
};

export default Input;
