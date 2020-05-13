import styled from 'styled-components';

const logo =  require("../images/logo.png")

export const Image = styled.div`
  height: 50px;
  background-image: url(${logo});
  background-repeat: no-repeat;
`;

export const TopBar = styled.div`
  height: 79px;
  width: 100%;
  padding: 15px 37px 15px;
  background-color: white;
`;