import styled from 'styled-components';

const Input = ({
  title,
  type,
  name,
  value,
  placeholder,
  pattern,
  onChange,
}) => {
  return (
    <ContainerInput>
      <Label>{title}</Label>
      <InputInner
        type={type}
        name={name}
        key={name}
        value={value}
        onChange={onChange}
        pattern={pattern}
        placeholder={placeholder}
        autoComplete="off"
        required
      />
    </ContainerInput>
  );
};

export default Input;

const Label = styled.h2`
  text-align: center;
  font-size: 20px;
  margin-bottom: 5px;
`;

const InputInner = styled.input`
  padding: 5px;
  width: 200px;
  opacity: 0.5;
  border: none;
  border-radius: 5px;
`;

const ContainerInput = styled.div`
  margin-bottom: 20px;
`;
