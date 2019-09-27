import React from "react";
import Header from "./header/Header";
import  Search  from "./search/Search";
import DataGrid from "./datagrid/DataGrid";
import Sidebar from "./sidenav/Sidebar";
import "./style/main.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import {fas, faSearch } from '@fortawesome/free-solid-svg-icons';

import { Container, Col, Row } from 'reactstrap';

library.add(fas, faSearch)

function App() {

  return (
    <div>

      <Header />

      <Container className="wrap">

        <Col md="3">

          <div className="left-sidebar">

            <Sidebar />

          </div>

        </Col>


        <Col md="9">
          <div className="right-grid">

          <Search />

            <Row>
              <DataGrid />
            </Row>

          </div>
        </Col>

      </Container>

    </div>
  );
};


export default App;
