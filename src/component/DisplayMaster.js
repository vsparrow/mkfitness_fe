import React, { Component } from 'react';

class DisplayMaster extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  messageToViewerToSelectUser(){
    console.log(`DisplayMaster: selectedUser is ${this.props.selectedUser}`);
    if(this.props.selectedUser == null) {return <h1>Please select a user above</h1>}
    //else call some subcomponent
    else {return <h1>Get data for user {this.props.selectedUser} here</h1>}
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
