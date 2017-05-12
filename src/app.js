import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import AlbumList from './components/album/AlbumList';
import LoginForm from './components/auth/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializaApp({
      apiKey: 'AIzaSyA5TUh-vCv4b33gzTnhZ60HDL7pX_VG_CM',
      authDomain: 'authentication-e132b.firebaseapp.com',
      databaseURL: 'https://authentication-e132b.firebaseio.com',
      projectId: 'authentication-e132b',
      storageBucket: 'authentication-e132b.appspot.com',
      messagingSenderId: '443475363193'
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Authentication'} />
        {/*<AlbumList />*/}
        <LoginForm />
      </View>
    );
  }

}

export default App;
