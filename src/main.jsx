import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from "./Footer.jsx";

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <div>
    <Header />
    <Body />
    <Footer />
  </div>
);
