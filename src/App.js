import React from "react";
import Header from "./header/Header";
import TopBar from './header/TopBar';
import Search from "./search/Search";
import Sidebar from "./sidenav/Sidebar";
import { Container, Col } from 'reactstrap';
import "./style/main.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faSearch, faSeedling} from '@fortawesome/free-solid-svg-icons';
import FloatBtn from './FloatBtn';

library.add(fas, faSearch, faSeedling)

function App() {

  return (
    <div>

      <TopBar />

      <Header />

      <Container className="wrap">

     

        <Col md="2" xl="2">

          <div className="left-sidebar">

            <Sidebar />

          </div>

        </Col>


        <Col md="9" xl="9">
          <div className="right-grid">

            <Search />

          </div>
        </Col>

        <Col md="1" xl="1">
        <FloatBtn />
          </Col>

      </Container>

    </div>
  );
};


export default App;
