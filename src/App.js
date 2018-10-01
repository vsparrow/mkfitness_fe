import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import DisplayMaster from './component/DisplayMaster.js';
import ShowUsers from './component/ShowUsers.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      api: "http://localhost:3000",
      users: [ {id: 0, "firstname": "fname", "lastname": "lname"},{id: 100, "firstname": "fname2", "lastname": "lname2"} ],
      selectedUser: null
    }
  }
  //function passed down to child to change App.js state
  updateState(key,value){
    this.setState(key: value)
  }

  componentDidMount(){
    let source = this.state.api + "/users"
    // fetch()
    // console.log(source);
    fetch(source)
    .then(res=>res.json())
    // .then(json => {console.log(json)})
    .then(json => {this.setState({users: json})})
  }

  render() {
    // console.log(`Currently selected user is: ${this.state.selectedUser}`);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Select a User</h1>
          <ShowUsers users={this.state.users} updateState={this.updateState.bind(this)}/>
        </header>
        <DisplayMaster selectedUser={this.state.selectedUser}/>
      </div>
    );
  }
}

export default App;
