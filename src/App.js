import React, { lazy, Suspense } from 'react';
import { Container, Col } from 'reactstrap';
import Header from './header/Header';
import TopBar from './header/TopBar';
import Search from "./search/Search";
import Blurb from './Blurb';
import Footer from './Footer';
import "./style/main.css";
import FloatBtn from './FloatBtn';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faSearch, faSeedling, faSpa } from '@fortawesome/free-solid-svg-icons';

const Loader = lazy(() => import('./Loader'));

library.add(fas, faSearch, faSeedling, faSpa)

function App() {

  return (
    <Suspense fallback={<div style={{ height: "100vh", width: "100vw", backgroundColor: "darkgreen", color: "#fff" }}>
      <h1 style={{ position: "relative", textAlign: "center", top: "220px" }}>
        <img src="https://i.imgur.com/Z8Cqtno.png" alt="Flower" />Plant Finder is Loading...</h1></div>
      }>
      <>
        <Loader />
        <TopBar />
        <Header />
        <Container className="fluid">
          <Blurb />
          <Col md="12" xl="12">
            <div className="right-grid"> <Search /></div>
          </Col>
          <FloatBtn />
        </Container>
        <Footer />
      </>
    </Suspense>
  );
};


export default App;
