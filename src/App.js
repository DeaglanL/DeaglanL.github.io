import React from 'react';
import './App.css';
import CVData from './Data/CVData'
import Header from './Component/Header';
import About from './Component/About';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <About data = {this.state.CVData.About}/>
        <Footer />
    </div>
  );
}

export default App;
