import React from "react";
import Header from "./header/Header";
import TopBar from './header/TopBar';
import Search  from "./search/Search";
import Sidebar from "./sidenav/Sidebar";
import "./style/main.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import {fas, faSearch } from '@fortawesome/free-solid-svg-icons';

import { Container, Col } from 'reactstrap';

library.add(fas, faSearch)

function App() {

  return (
    <div>

      <TopBar />

      <Header />

      <Container className="wrap">

        <Col md="3" xl="2">

          <div className="left-sidebar">

            <Sidebar />

          </div>

        </Col>


        <Col md="9" xl="10">
          <div className="right-grid">

          <Search />

          </div>
        </Col>

      </Container>

    </div>
  );
};


export default App;
