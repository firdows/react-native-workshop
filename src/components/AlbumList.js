import React , { Component } from 'react';
import ReactNative, { View , Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component{
  componentWillMount(){
    //console.log("componentWillMount as Alum List ");
    //debugger;
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
      .then(response => console.log(response));
  }

  render (){
    return (
      <View>
        <Text>AlbumList 123</Text>
      </View>
    );
  }
}

export default AlbumList;
