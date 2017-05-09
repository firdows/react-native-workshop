import React from 'react';
import {View,Text,Image} from 'react-native';

import Card from './Card';



const AlbumDetail = (props) => {
  return (
    <View>

      <Card />
      <Text>{props.album.title}</Text>
      <Text>{props.album.artist}</Text>

    </View>
  );
};


export default AlbumDetail;
