import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 24px;
  background: #bbccdd;
`;

export const Input = styled.input`
  border: 0;
  line-height: 1.3em;
  padding: 8px;
`;

export const Button = styled.button`
  margin-left: 8px;
  padding: 8px;
  cursor: pointer;

  font-weight: bold;

  color: white;
  border: 1px solid transparent;
  background: #6558f5;
  transition: .3s;
  transform: translateY(0px);
  
  &:hover{
    background: #3222f2;
  }
  
  &:active {
    transform: translateY(-4px);
  }

  &:disabled{
    background: grey;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
export const ErrorMessage = styled.p`
  padding: 8px;
  margin: 12px;

  border-radius: 4px;
  color: white;
  background: #ff8080;
`;