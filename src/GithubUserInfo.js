import React, { Component } from 'react';
import axios from 'axios';
import './GithubUserInfo.css'

class GithubUserInfo extends Component {
  constructor(props){
    super(props);
    this.state ={
      url: '',
      image_url:'',
      name: ''
    }
  }

  async componentDidMount(){
    const url = `https://api.github.com/users/${this.props.username}`
    let response = await axios.get(url)
    console.log(response.data);
    let data= response.data;
    this.setState({ image_url: data.avatar_url, name: data.name, url: data.html_url})
  } 

  render() {
    return(
      <div className='facebookInfo'>
        <img src={this.state.image_url} alt=''/>
        <div className='details'>
          <p>{this.state.name}</p>
          <p><a href={this.state.url}>{this.state.url}</a></p>
        </div>
      </div>
    )
  }
}

export default GithubUserInfo;