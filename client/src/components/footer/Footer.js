import React from "react";
// Importing install libraries
import styled from "styled-components";

// Styled components:
const FooterDiv = styled.div`
  padding: 20px;
  box-shadow: 0px 0px 41px -23px rgba(0, 0, 0, 0.35);
  position: absolute;
  left: 0;
  bottom: 0;
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const P = styled.p`
  color: #f8f8f2 !important;
  cursor: pointer;
  font-family: 'Karla', sans-serif !important;
  font-style: italic;
`;
const Footer = () => {
  return (
    <div>
      <FooterDiv>
        <P>Ödlund ©</P>
      </FooterDiv>
    </div>
  );
};

export default Footer;
