import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
  constructor(props){
    super(props);
    this.state = {
      loadTime: new Date(),
      currentTime: new Date()
    }
    console.log('In <Timer /> constructor')
  }
  componentDidMount(){
    console.log('In <Timer /> componentDidMount')
    this.timerID = setInterval( () => {
      this.setState({ currentTime: new Date() })
    },1000);
  }


  render(){
    console.log('In <Timer /> render')
    return(
      <div>
        <h4>Component on page since:</h4>
        <h4>{this.state.loadTime.getHours()}:{this.state.loadTime.getMinutes()}:{this.state.loadTime.getSeconds()}</h4>
        <h4>Current Time:</h4>
        <h4>{this.state.currentTime.getHours()}:{this.state.currentTime.getMinutes()}:{this.state.currentTime.getSeconds()}</h4>
      </div>
    )
  }
}

export default Timer;