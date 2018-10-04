import React, { Component } from 'react';
import DisplaySelected from './DisplaySelected'

class DisplayMaster extends Component {
  constructor(props){
    super(props)
    this.state = {
      users : {},
      selectedItem: null
    }
    this.handleClick = this.handleClick.bind(this) //need this else es6 functions don't have this level "this"
  }

  // componentDidMount(){
  //   //if user does not exist in this state add
  //   if(!(this.props.selectedUser in this.state.users)){
  //     const userid = this.props.selectedUser
  //     //change to Spread operator here
  //     let users=Object.assign({},this.state.users)
  //     users[userid] = {}
  //     this.setState({users: users}) //could also user just {users}
  //     console.log("nothing here");
  //   }
  //   //else do nothing
  // }
  componentDidUpdate(){
    //if user does not exist in this state add
    if(!(this.props.selectedUser in this.state.users)){
      const userid = this.props.selectedUser
      //change to Spread operator here
      let users=Object.assign({},this.state.users)
      users[userid] = {}
      this.setState({users: users}) //could also user just {users}
      // console.log("nothing here");
      console.log(this.state);
    }
    //else do nothing

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
    // console.log("handleClick************************");
    // console.log(this.state);
    // console.log(selectedItem);
    // console.log(this.props.api);
    if(this.state.users[this.props.selectedUser] && (selectedItem in this.state.users[this.props.selectedUser])){
    // if(selectedItem in this.state.selectedUser){
      //display from state
      // console.log("displaying from state");
      // console.log(this.state);
      this.setState({selectedItem})
    }
    else{
      //need to fetch
      //need
      // console.log("need to fetch");
      // console.log(this.state.selectedUser);
      // console.log((selectedItem in this.state.selectedUser));
      //then add to state
      // this.setState({[selectedItem]: "SomeData"})
      // this.setState({[selectedItem]: this.getData(selectedItem)})
      this.getData(selectedItem)
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
  getData(selectedItem){
    let url = this.props.api + "/users/" + this.props.selectedUser + "/" + selectedItem
    // console.log(url);
    fetch(url)
    .then(res=>res.json())
    // .then(res=> (this.setState({[selectedItem]: res},()=>{console.log(this.state)}))   )
    .then(res=>this.setData(selectedItem,res))
    //return data
  }

  setData(selectedItem,data){
    // console.log("INSIDE setData");
    // console.log(this.state);
    // console.log(data);
    //update to spead
    let users = this.state.users
    users[this.props.selectedUser][selectedItem] = data
    // this.setState({users},()=>{console.log(this.state);})
    // this.setState({users : users, selectedItem: selectedItem},()=>{console.log(this.state);})
    this.setState({users : users, selectedItem: selectedItem})
  }
  //end DATA ********************************************************************

  messageToViewerToSelectUser(){
    // console.log(`DisplayMaster: selectedUser is ${this.props.selectedUser}`);
    if(this.props.selectedUser == null) {return <h1>Please select a user above</h1>}
    //else call some subcomponent
    // else {return <div><h1>Get data for user {this.props.selectedUser} here</h1><DisplaySelected/></div>}
    // else {return <DisplaySelected selectedUser={this.props.selectedUser}/>}
    else {return <div>{this.generateButtons()}<DisplaySelected selectedUser={this.props.selectedUser} selectedItem={this.state.selectedItem} users={this.state.users}/></div>}
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
