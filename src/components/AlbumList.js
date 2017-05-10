import React , { Component } from 'react';
import ReactNative, { View , Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{

  state = { albums:[]};

  componentWillMount(){
    console.log("componentWillMount as Alum List ");
    //debugger;
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({albums:response.data}));
      console.log("end componentWillMount");
  }

  renderAlbums (){
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />);
  }

  render (){
    //console.log(this.state);

    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
