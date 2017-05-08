
import React from 'react';
import {Text,View} from 'react-native';

const Header = () => {
  const {viewStyle,textStyle} = Styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

const Styles = {
  viewStyle:{
    backgroundColor:"#e8e8e8",
    justifyContent:"center",
    alignItems:"center",
  },
  textStyle:{
    fontSize:25
  }
}

export default Header;
