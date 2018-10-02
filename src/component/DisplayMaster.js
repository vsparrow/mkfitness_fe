import React, { Component } from 'react';
import DisplaySelected from './DisplaySelected'

class DisplayMaster extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
    this.handleClick = this.handleClick.bind(this)
  }

  //BUTTONS ********************************************************************
  generateButtons(){
    let buttonNames = ["ellipticals","carbs","sugars","lifts","waist_sizes","weights"]//,
    let buttons = buttonNames.map(b=>(
      <button key={b} onClick={()=>{this.handleClick(b)}}>
        {b}
      </button>
    ))
    return buttons
  }

  handleClick(selectedItem){
    //if waist change to waist_sizes
    console.log("handleClick************************");
    console.log(this.state);
    console.log(selectedItem);
    console.log(this.props.api);
    if(selectedItem in this.state){
      //display from state
      console.log("displaying from state");
    }
    else{
      //need to fetch
      //need
      console.log("need to fetch");
      //then add to state
      this.setState({[selectedItem]: "SomeData"})
    }

  }
  //end BUTTONS ********************************************************************

  //fetch DATA ********************************************************************
//   resources :ellipticals , :only => [:index, :show, :create, :update]
// resources :sugars , :only => [:index, :show, :create, :update]
// resources :carbs , :only => [:index, :show, :create, :update]
// resources :weights , :only => [:index, :show, :create, :update]
// resources :lifts , :only => [:index, :show, :create, :update]
// resources :waist_sizes , :only => [:index, :show, :create, :update]
  //end DATA ********************************************************************

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
