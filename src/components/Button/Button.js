import styled from 'styled-components';

const Button = styled.button`
  width: 50%;
  padding: 5px;
  color: ${props => props.color || 'white'}
  background-color: ${props => props.background || 'purple'}
  font-size: 20px
`;

export default Button;
