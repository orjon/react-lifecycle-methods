import React, { Component } from 'react';

class Timer extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: new Date()
    }
    console.log('In Constructor')
  }
  componentDidMount(){
    console.log('In componentDidMount')
  }
  render(){
    console.log('In Render')
    return(
      <div>
        <h1>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</h1>
      </div>
    )
  }
}

export default Timer;