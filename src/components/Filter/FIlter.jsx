import styled from 'styled-components';
import Container from '../Container';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <ContainerSearch>
      <Title>Find contacts by name</Title>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search name"
      />
    </ContainerSearch>
  );
};

export default Filter;

const ContainerSearch = styled(Container)`
  width: 300px;
  margin: 20px 0;
  padding: 10px 0;
  border-radius: 10px;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(41, 30, 94, 1) 0%,
    rgba(29, 59, 201, 1) 50%,
    rgba(5, 196, 207, 1) 100%
  );
`;

const Title = styled.h2`
  font-size: 20px;
`;

const Input = styled.input`
  margin-top: 10px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  opacity: 0.5;
`;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
