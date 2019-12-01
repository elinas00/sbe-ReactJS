import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';

const navOne = props =>{

    let menuItems = ['Start', 'Produkter', 'Tjänster'];

    const menu = menuItems.map(item=>{
        return <NavMenyLi><Link to={`/${item}`}>{item}</Link></NavMenyLi>

    });

    

    return(
        <Router>

            <Nav>
                <NavMenyUl>
                    {menu}
                </NavMenyUl>
            </Nav>

        </Router>
    )
}

const Nav = styled.div`
	display: flex;
	align-items: center;
	font-size: 17px;
	font-family: Verdana;
	margin-bottom: 20px;
`;

const NavMenyUl = styled.ul`
    flex: 1;
    list-style-type: none;
    display: flex;
    width: 100%;
    height: 20px;
    justify-content: space-between;
`;

const NavMenyLi = styled.li`
    border: 1px solid black;
    display: inline;
    flex-basis: 30%;
    padding: 10px;
    margin: auto;
    text-align: center;

    :hover{
        text-decoration: underline;
        padding: 10px;
    }
`;



export default navOne;