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

const App = () => {
    return (
      <View >
        <Text >
          Welcome to React Native!
        </Text>
        <Text >
          To get started, edit index.android.js
        </Text>
        <Text >
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );

}


AppRegistry.registerComponent('workshop', () => App);
