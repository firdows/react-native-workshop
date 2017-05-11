import React, { Component } from 'react';
import { View } from 'react-native';


import { Header } from './components/common';
import AlbumList from './components/album/AlbumList';

class App extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'อัลบั้ม'} />
        <AlbumList />
      </View>
    );
  }

}

export default App;
