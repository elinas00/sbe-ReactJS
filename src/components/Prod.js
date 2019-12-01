import React, { useEffect } from 'react';
import styled from 'styled-components';

const Prod = props =>{

    useEffect(async() => {

        let data = await fetch("http://simplebusiness.se/wp-json/wp/v2/posts");
        data = await data.json();
        console.log(data);
        // Update the document title using the browser API
        //document.title = `You clicked ${count} times`;
      });
    

    return(
        <prodContainer>
            <prodTitle>Hello</prodTitle>
            <prodImage/>
            <prodInfo>

            </prodInfo>
        </prodContainer>
    )
}

const prodContainer = styled.div`
    border: 1px solid black;
    width: 260px; 
    height: 380px;
    margin: 10px;
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    :hover{        
        transition: 0.80s;
        width: 270px;
        height: 390px;
        box-shadow: 5px 4px 8px gray;
    }
`;

const prodTitle = styled.h4`
    flex: 1;
    font-size: 24px;
    text-align: center;
    margin-bottom: 5px;

    :hover{
        
        color: #ffd633;
        text-decoration: underline;
    }
`;

const prodImage = styled.img`
    max-width: 100%;
    margin: auto;
`;

const prodInfo = styled.div`
    font-size: 80%;
    font-family: Arial, Helvetica, sans-serif;
    margin: 5%;
    margin-bottom: 3%;
`;


export default Prod;