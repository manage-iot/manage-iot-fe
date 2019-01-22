import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'

import { withStyles } from '@material-ui/core/styles';
import './App.css';

const styles = {
  app: {
    height: '100vh',
    background: '#fffbfb'
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.classes = props.classes;
  }
  render() {
    return (
      <div className = {this.classes.app}>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(App);


