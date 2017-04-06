import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Cohort4!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
