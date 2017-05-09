import React , { Component } from 'react';
import ReactNative, { View , Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component{

  state = { albums:[]};

  componentWillMount(){
    //console.log("componentWillMount as Alum List ");
    debugger;
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({albums:response.data}));
  }

  renderAlbums (){
    return this.state.albums.map(album => <Text>{album.title}</Text>);
  }

  render (){
    console.log(this.state);

    return (
      <View>
      <Text>11</Text>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
