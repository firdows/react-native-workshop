'use strict';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

class App extends Component {

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header headerText={'Tech Stack Redux'} />
        
        </View>
      </Provider>
    );
  }

}

export default App;