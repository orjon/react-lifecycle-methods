import React, { Component } from 'react';
import axios from 'axios';

class ZenQuote extends Component {
  constructor(props){
    super(props);
    this.state = { quote: 'Loading... (6secs)'}; //State needs an initial value!
    console.log('In <ZenQuote /> constructor')
  }
  componentDidMount(){
    console.log('In <ZenQuote /> componentDidMount')
    axios.get("https://api.github.com/zen").then(response => {
      setTimeout(
        function() {
          this.setState({ quote: response.data})
        }.bind(this),
        6000  //falsified 6secs loading
      );
    })
  }
  render() {
    console.log('In <ZenQuote /> render')
    return (
      <div>
        Remember: {this.state.quote}
        <br></br>
        <br></br>
        ...and don't get data or setState in the constructor
      </div>
    )
  }
}

export default ZenQuote;