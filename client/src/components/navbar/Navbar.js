import React from "react";

// Importing install libraries
import styled from "styled-components";

// Styled components:
const NavDiv = styled.div`
  box-shadow: 0px 0px 41px -23px rgba(0, 0, 0, 0.75) !important;
  width: 100%;
  height: 10vh;
  top: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  left: 0;
  bottom: 0;
`;

// Sorry for making so many styled divs, i don't fucking know where to put them XD
const NavLogoDiv = styled.div``;
const NavLogoH1 = styled.h1`
  color: #f8f8f2;
  font-family: 'Karla', sans-serif;
  cursor: pointer;

`;

const NavLanguageSelectDiv = styled.div`
width: auto;
`;
const NavLanguageSelect = styled.select`
    background-color: #44475a;
    color: #f8f8f2;
    cursor: pointer;

`;

const NavDonateDiv = styled.div`
`;

const NavDonateButton = styled.a`
    color: #bd93f9 !important;
    cursor: pointer;
    font-family: 'Karla', sans-serif;
`;

const Navbar = () => {
  return (
    <div>
      <NavDiv>
          {/* Logo */}
        <NavLogoDiv>
          <a href="/">
          <NavLogoH1>Lingua simple</NavLogoH1>
          </a>
        </NavLogoDiv>
        {/* Language select */}
        <NavLanguageSelectDiv>
            {/* This is where one would be select the prefered language */}
            <NavLanguageSelect>
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
            <option>Norwegian</option>
            <option>German</option>
            </NavLanguageSelect>
        </NavLanguageSelectDiv>
        {/* Donate */}
        <NavDonateDiv>
            <NavDonateButton>
                Donate
            </NavDonateButton>
        </NavDonateDiv>
      </NavDiv>
    </div>
  );
};

export default Navbar;
