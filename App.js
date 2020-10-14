import React from 'react';
import StBar from './Components/StBar'
import styled from 'styled-components';

export default function App() {
  return (
    <Container>
      <StBar />
      
      {/* <ListNikes /> */}
    </Container>
  );
}

const Container = styled.View`
    flex:1;
    background-color: #ffffff;

` 

