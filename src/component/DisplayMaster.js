import React, { Component } from 'react';
import DisplaySelected from './DisplaySelected'

class DisplayMaster extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }


  generateButtons(){
    let buttonNames = ["elliptical","no_carb","no_sugar","lift","waist","weight"]//,
    let buttons = buttonNames.map(b=>(
      <button key={b} onClick={()=>{this.handleClick(b)}}>
        {b}
      </button>
    ))
    return buttons
  }

  handleClick(selectedItem){
    console.log(selectedItem);
  }

  messageToViewerToSelectUser(){
    // console.log(`DisplayMaster: selectedUser is ${this.props.selectedUser}`);
    if(this.props.selectedUser == null) {return <h1>Please select a user above</h1>}
    //else call some subcomponent
    // else {return <div><h1>Get data for user {this.props.selectedUser} here</h1><DisplaySelected/></div>}
    // else {return <DisplaySelected selectedUser={this.props.selectedUser}/>}
    else {return <div>{this.generateButtons()}<DisplaySelected selectedUser={this.props.selectedUser}/></div>}
  }

  render() {
    return (
      <div className="DisplayMaster">
        <h1>
            DisplayMaster
        </h1>
        {this.messageToViewerToSelectUser()}
      </div>
    );
  }
}

export default DisplayMaster;
