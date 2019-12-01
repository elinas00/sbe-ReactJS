import React from 'react';
import styled from 'styled-components';

import NavTwo from '../components/navTwo';
import Prod from '../components/Prod';

const ProdukterView = () => {

  return (
      <MainContainer>
        <NavTwo/>
        <Prod/>
      </MainContainer>
  );
}

const MainContainer = styled.div`¨
border: 1px solid black;
width: 100%;
  height: auto; 
  margin-bottom: 20px;
	display: flex; 
	justify-content: center; 
`;


export default ProdukterView;
