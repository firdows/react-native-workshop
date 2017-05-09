import React , { Component } from 'react';
import ReactNative, { View , Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component{

  state = { albums:[]};

  componentWillMount(){
    //console.log("componentWillMount as Alum List ");
    //debugger;
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({albums:response.data}));
  }

  render (){
    console.log(this.state);

    return (
      <View>
        <Text>AlbumList...</Text>
      </View>
    );
  }
}

export default AlbumList;
