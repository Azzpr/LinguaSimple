import React from "react";

// Importing install libraries
import styled from "styled-components";


// Styled components:
const Title = styled.h1`
  color: #f8f8f2;
  font-family: "Karla", sans-serif;
  margin-left: -30rem;
  padding: 5px;
`;
const Headline = styled.h2`
  color: #f8f8f2;
  font-family: "Karla", sans-serif;
  margin-left: -15rem;
  padding: 10px;
`;
const ResourceUl = styled.ul``;
const ResourceLi = styled.li`
  cursor: pointer;
  color: #bd93f9;
  padding: 5px;

`;
const ResourceA = styled.a`
  color: #bd93f9;
  font-family: "Karla", sans-serif !important;
  font-size: 18px;
  cursor: pointer;
  font-style: italic;
  text-decoration: underline;
`;

const Content = styled.div`
    padding-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const LanguageTreeFrench = () => {
  return (
    <Content>
      <Title>French</Title>
      <Headline>Grammatical rules</Headline>
      <ResourceUl>
        <ResourceLi>
          <ResourceA href="/resources/french/grammaticalrules/ThousandMostCommonWords">1000 Most Common Words</ResourceA>
        </ResourceLi>
      </ResourceUl>

   


    </Content>
  );
};

export default LanguageTreeFrench;
