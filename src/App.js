import React from "react";
import Header from "./header/Header";
import TopSearch from "./search/TopSearch";
import DataGrid from "./datagrid/DataGrid";
import Sidebar from "./sidenav/Sidebar";
import "./style/main.css";

import { Container, Col, Row } from 'reactstrap';

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

            <TopSearch />

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
