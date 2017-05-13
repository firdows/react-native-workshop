'use strict';
import React, { Component } from 'react';
import { View } from 'react-native';
import * as firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
//import AlbumList from './components/album/AlbumList';
import LoginForm from './components/auth/LoginForm';


class App extends Component {
  state = { loggendIn: null }

  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyA5TUh-vCv4b33gzTnhZ60HDL7pX_VG_CM',
      authDomain: 'authentication-e132b.firebaseapp.com',
      databaseURL: 'https://authentication-e132b.firebaseio.com',
      projectId: 'authentication-e132b',
      storageBucket: 'authentication-e132b.appspot.com',
      messagingSenderId: '443475363193'
    };
    const firebaseApp = firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
      console.log({ "user": user });
      if (user) {
        this.setState({ loggendIn: true });
      } else {
        this.setState({ loggendIn: false });
      }
    });

    //console.log(firebaseApp);
  }

  runderContent() {
    switch (this.state.loggendIn) {
      case true:
        return (
        <Button onPress={() => firebase.auth().signOut()}>
          Log Out
        </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }

    /*if (this.state.loggendIn) {
      return (
        <Button>
          Log Out
        </Button>
      );
    } else {
      return (<LoginForm />);
    }*/
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Authentication'} />
        {/*<AlbumList />*/}
        {this.runderContent()}
      </View>
    );
  }

}

export default App;
