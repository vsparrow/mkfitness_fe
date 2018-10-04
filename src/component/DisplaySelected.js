import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';


class DisplaySelected extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  //may not need later
  componentDidUpdate(){
    console.log("props is");
    console.log(this.props);
  }

  render() {
    // console.log( "selecteduser is" + this.props.selectedUser);
    //labels is the x axis
    //datasets additional chart information
      //label is the name for the entire dataset
      //data : the data that needs graphing as array
    let data= {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
        label: "My First dataset",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
        }]
    }
    return (
      <div className="DisplaySelected">
        <h1>
            DisplaySelected
        </h1>
        < Bar data={data} />

      </div>
    );
  }
}

export default DisplaySelected;
