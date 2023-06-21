import React, { FC, ChangeEvent, CSSProperties } from 'react';

interface InputProps {
  value: string;
  label?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  style?: CSSProperties;
}

const Input: FC<InputProps> = ({
  value,
  label,
  placeholder = 'placeholder',
  onChange,
  disabled = false,
  style = {}
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const inputStyle: CSSProperties = {
    padding: '0px 8px 0px 15px',
    border: '2px solid #E8EDEF',
    borderRadius: '3px',
    background: "#E8EDEF",
    fontSize: '16px',
    width: '450px',
    height: "45px",
    boxSizing: 'border-box',
    ...style // Merge additional custom styles with default styles
  };

  return (
    <div>
      {label && <label>{label}</label>}
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
        style={inputStyle}
      />
    </div>
  );
};

export default Input;
