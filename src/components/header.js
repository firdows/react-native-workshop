
import React from 'react';
import {Text} from 'react-native';

const Header = () => {
  const {textStyle} = Styles;

  return <Text style={textStyle}>Albums!</Text>;
};

const Styles = {
  textStyle:{
    fontSize:25,
  }
}

export default Header;
