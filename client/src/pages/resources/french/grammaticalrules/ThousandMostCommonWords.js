import React from "react";

// Importing install libraries
import styled from "styled-components";

const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100%;
width: 100%;
padding-top: 10rem;
`;

const Table = styled.table`
background-color: #44475a;
width: 40%;
border: 2px solid #282a36;
color: #f8f8f2;
font-family: 'Karla', sans-serif;
`;

const Tr = styled.tr`
border: 2px solid #282a36;
`;

const Th = styled.th`
border: 2px solid #282a36;
text-align: left;
padding: 10px;
`;
const Td = styled.td`
border: 2px solid #282a36;
text-align: left;
padding: 10px;
`;
const ThousandMostCommonWords = () => {
  return (
    <Content>
    <Table>
     <Tr>
      <Th>Nr</Th>
      <Th>French</Th>
      <Th>English</Th>
     </Tr>
     <Tr>
     <Td>1</Td>
     <Td>1</Td>
     <Td>1</Td>
     </Tr>
     <Tr>
     <Td>1</Td>
     <Td>1</Td>
     <Td>1</Td>

     </Tr>
     </Table>
    </Content>
  );
};

export default ThousandMostCommonWords;
