import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Page from './components/Page';
import Footer from './components/Footer';

function App() {
  return (
  <div className='wrapper'>
    <Header />
    <Navbar />
    <Page />
    <Footer />
  </div>
  );
}

export default App;
