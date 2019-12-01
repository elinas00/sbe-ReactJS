import React from 'react';
import styled from 'styled-components';

import NavOne from './navOne';

const header = props =>{

    return(
        <HeaderContainer>
            <HeaderImg src={require("../assets/Logga/SBENy.jpg")}/>

            <HeaderMeny>

                <HeaderSök type="text" placeholder="Sök"/>

                <NavOne />

            </HeaderMeny>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
	display: flex;	
	align-items: center;
	font-size: 18px;
	font-family: Verdana;
    margin-bottom: 20px;
`;

const HeaderImg = styled.img`
    width: 10%;
    height: auto;
    flex: 1;
`;

const HeaderMeny = styled.div`
    background-color: white;
    flex: 3;
    margin: auto;
    margin-left: 0px;
    height: 120px;
    display: flex;
    flex-direction: column;
`;


const HeaderSök = styled.input`
    with: 80%;
    height: 30%;
    font-size: 15px;
    justify-content: center;
    margin-left: 17px;
`;


export default header;