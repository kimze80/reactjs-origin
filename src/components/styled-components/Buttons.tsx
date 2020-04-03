import styled from 'styled-components';

export const BackButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: #e1e8ed solid 0.5px;

  :hover {
    background: #F2F3F3;
  }
  :focus {
    outline: none;
  }
`;

export const FinishButton = styled.button`
  width: 84%;
  height: 56px;
  border-radius: 50px;
  background: #1b31a8;
  border-color: #1b31a8;
  color: white;
  font-size: 1.1em;
  /* border: #e1e8ed solid 0.5px; */
  :hover {
    background: #090592;
    border-color: #090592;
  }
  :focus {
    outline: none;
  }
`;
