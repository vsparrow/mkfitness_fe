import React, { Component } from 'react';

class ShowUsers extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  handleClick(id){
    // console.log(id);
    this.props.updateState({selectedUser : id})
  }

  render() {

    return (
      <div className="ShowUsers">
        {this.props.users.map( user => <button id={user.id} onClick={()=>{this.handleClick(user.id)}} key={user.id}>{user.firstname} {user.lastname}</button>)}
      </div>
    );
  }
}

export default ShowUsers;
