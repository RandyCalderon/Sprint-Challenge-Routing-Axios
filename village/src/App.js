import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  handleSetData = data => this.setState({ smurfs: data});

  componentDidMount() {
    axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      this.setState({smurfs: response.data});
    })
    .catch (err => {
      console.log(err);
    })
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Header} />
        <SmurfForm handleSetData={this.handleSetData} />
        <Smurfs smurfs={this.state.smurfs} handleSetData={this.handleSetData} />
      </div>
      
    );
  }
}

export default App;
