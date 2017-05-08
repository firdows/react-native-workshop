
import React from 'react';
import {Text,View,Platform} from 'react-native';

const Header = (props) => {
  const {viewStyle,textStyle} = Styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const Styles = {
  viewStyle:{
    backgroundColor:"#e8e8e8",
    justifyContent:"center",
    alignItems:"center",
    height:60,
    paddingTop:Platform.os=='ios'?25:0,
    shadowColor:"#000",
    shadowOffset:{width:0,height:5},
    shadowOpacity:0.9,
    elevation:2,
    position:'relative',
  },
  textStyle:{
    fontSize:25
  }
}

export default Header;
