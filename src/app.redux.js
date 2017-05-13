'use strict';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LibraryList from './components/tech-stack/LibraryList';

class App extends Component {

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View >
          <Header headerText={'Tech Stack Redux'} />
         <LibraryList />
        </View>
      </Provider>
    );
  }

}

export default App;