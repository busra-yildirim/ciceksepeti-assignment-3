
import './App.css';
import React from 'react';
import Layout from './Components/Layout';

class App extends React.Component{
  // Main Layout
  render() {
      return (
        <>
          <div className="website-title">RECIPE CARDS</div>
          <Layout/>
      </>
      );
  }
}

export default App;
