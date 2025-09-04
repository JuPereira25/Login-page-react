import './InputField.css'; 

const InputField = ({type, placeholder, icon, value, onChange }) => {
  return (
    <div className="input-container">
      <div className="input-wrapper">
        <img src={icon} alt="ícone" className="input-icon" />
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="input-field"
        />
      </div>
    </div>
  );
};

export default InputField;