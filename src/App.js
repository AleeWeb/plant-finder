import React from "react";
import Header from "./header/Header";
import TopBar from './header/TopBar';
import Search from "./search/Search";
import Blurb from './Blurb';
import { Container, Col } from 'reactstrap';
import "./style/main.css";
import "./style/images.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faSearch, faSeedling, faSpa } from '@fortawesome/free-solid-svg-icons';
import FloatBtn from './FloatBtn';

library.add(fas, faSearch, faSeedling, faSpa)

function App() {

  return (

    <div>

      <TopBar />

      <Header />

      <Container className="fluid">

        <Blurb />


        <Col md="12" xl="12">
          <div className="right-grid"> <Search /></div>
        </Col>

        <FloatBtn />

      </Container>

    </div>
  );
};


export default App;
