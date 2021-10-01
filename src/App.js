
import './App.css';
import Layout from './components/Layout';
import React from 'react';

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
