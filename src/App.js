import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowUsers from './component/ShowUsers.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      api: "http://localhost:3000",
      users: [ {id: 0, "firstname": "fname", "lastname": "lname"},{id: 100, "firstname": "fname2", "lastname": "lname2"} ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <ShowUsers users={this.state.users}/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>
          {this.state.api}
        </h3>
      </div>
    );
  }
}

export default App;
