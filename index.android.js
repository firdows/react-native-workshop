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

const App = () => {
    return <Header headerText={'อัลบั้ม'}/>;
};


AppRegistry.registerComponent('workshop', () => App);
