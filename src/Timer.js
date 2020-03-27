import React, { Component } from 'react';

class Timer extends Component {
  constructor(props){
    super(props);
    console.log('In Constructor')
  }
  componentDidMount(){
    console.log('In componentDidMount')
  }
  render(){
    console.log('In Render')
    return(
      <div></div>
    )
  }
}

export default Timer;