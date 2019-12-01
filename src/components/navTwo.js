import React from 'react';
import styled from 'styled-components';

const navTwo = props =>{

    let menuItems = ['Start', 'Reception', 'Rom', 'Restaurang', 'Konferens', 'kosmetika'];

    const menu = menuItems.map(item=>{
        return <NavMenyLi>{item}</NavMenyLi>

    });

    

    return(
        <Nav>
            <NavMenyUl render={menuItems =>(
                <NavMenyLi>{this.render(this.state)}</NavMenyLi>
            )}>
                {menu}
            </NavMenyUl>
        </Nav>
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
    list-style-type: none;
    display: flex;
    flex-basis: 100%;
	justify-content: space-evenly;
`;

const NavMenyLi = styled.li`
    background-color: black;
    color: #ffd633;
    font-weight: bold;
	flex-basis: 40%;
    padding: 20px;
    text-align: center;
    
    :hover{        
        color: white;
        flex-basis: 20%;
    }
`;

export default navTwo;