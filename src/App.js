import React, { Component } from 'react';
import './App.css';

class Clock extends React.Component {
  constructor(props){
    super(props); {/*constructor + super - always together*/}
    this.state = {date: new Date()}; {/* date is property of this.state that has value of getting date js-function*/}
  }

  componentDidMount() { {/*invoke an interval function once our component is mounted
     and this func invokes tick function every second we're setting this.counter to hold the setInterval function*/}
      this.counter = setInterval(
      () => this.tick(),
       1000);
  }

  componentWillUnmount() { {/*we want to stop the counter when the DOM is quit, when moving to other page*/}
   {/* use this.counter from the state to clear the interval*/}
    clearInterval(this.counter);
 }

  tick() { {/*The time gets updated by us changing the state every second - setState*/}
     this.setState({
       date: new Date(),
     });
   }

  render() {
    return (
      <div>
        <h1>Hello Cohort4!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2> {/*string the current date nicely onto just time!*/}
      </div>
    );
  }
}



export default Clock;
