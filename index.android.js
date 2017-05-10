/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => {
    return (
      <View style={{ flex:1 }}>
        <Header headerText={'อัลบั้ม'}/>
        <AlbumList />
      </View>
    );
};


AppRegistry.registerComponent('workshop', () => App);
