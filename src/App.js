import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/header';

import Start from './pages/StartView';
import Produkter from './pages/ProdukterView';
import Tjänster from './pages/TjänsterView';

const App = () => {

  useEffect(async() => {

    let data = await fetch("http://simplebusiness.se/wp-json/wp/v2/posts");
    data = await data.json();
    console.log(data);
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
  });

  return (
    <WebContainer>
      <Container>

        <Header />

        <Router>
          <Switch>
            <Route exact path="/Start" component={Start}/>
            <Route path="/Produkter" component={Produkter}/>
            <Route path="/Tjänster" component={Tjänster}/>
          </Switch>
        </Router>

      </Container>
    </WebContainer>
  );
}

const WebContainer = styled.div`
  margin: 0;
  box-sizing: border-box;
  background-color: #f2f2f2;
  padding: 10px;
`;

const Container = styled.div`
  background-color: #fff;
  margin: auto;
  width: 95%;
  height: auto;
  padding: 15px;
`;

export default App;
