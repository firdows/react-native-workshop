import React , { Component } from 'react';
import ReactNative, { View , Text } from 'react-native';


class AlbumList extends Component{
  componentWillMount(){
    console.log("componentWillMount as Alum List ");
    //debugger;
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
