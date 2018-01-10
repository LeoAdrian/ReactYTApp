import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import { Debounce } from 'react-throttle';


import Searchbar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import './App.css';

const API_KEY = `AIzaSyBnLX3IAsZJWK2SigM9fTWnh9IXBMQ1t0Y`;



class App extends Component {
  constructor (props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.onVideoSearch();

  }

  onVideoSearch = (term = 'dogs') => {
    YTSearch({key:API_KEY, term: term},videos =>{
      this.setState({
         videos: videos,
         selectedVideo: videos[0]
       });
      console.log(this.state.selectedVideo)
    })
  }

  render() {
    return (
      <div>
        <Debounce time='800' handler='onSearchChange'>
          <Searchbar onSearchChange = {(newTerm) => {this.onVideoSearch(newTerm)}} />
        </Debounce>
      <div className = 'row'>
        <VideoDetail selectedVideo = {this.state.selectedVideo}/>
        <VideoList onVideoSelect = {(selectVideo) => this.setState({ selectedVideo: selectVideo })} videos = {this.state.videos}/>
      </div>
    </div>
    );
  }
}

export default App;
