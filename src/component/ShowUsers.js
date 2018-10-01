import React, { Component } from 'react';

class ShowUsers extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {

    return (
      <div className="ShowUsers">
        {this.props.users.map( user => <button>{user.firstname} {user.lastname}</button>)}
      </div>
    );
  }
}

export default ShowUsers;
