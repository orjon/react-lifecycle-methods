import React, { Component } from 'react';
import axios from 'axios';

class GithubUserInfo extends Component {
  constructor(props){
    super(props);
    this.state ={
      image_url:'',
      name: ''
    }
  }

  async componentDidMount(){
    const url = `https://api.github.com/users/${this.props.username}`
    let response = await axios.get(url)
    console.log(response.data);
    let data= response.data;
    this.setState({ image_url: data.avatar_url, name: data.name})
  } 

  render() {
    return(
      <div>
        <img src={this.state.image_url} />
      </div>
    )
  }
}

export default GithubUserInfo;