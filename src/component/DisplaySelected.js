import React, { Component } from 'react';

class DisplaySelected extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    console.log(this.props.selectedUser);
    return (
      <div className="DisplaySelected">
        <h1>
            DisplaySelected
        </h1>
      </div>
    );
  }
}

export default DisplaySelected;
