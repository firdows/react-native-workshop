import React from 'react';
import {View,Text,Image} from 'react-native';

import Card from './Card';



const AlbumDetail = (props) => {
  return (
    <Card>

      <Text>{props.album.title}</Text>
      <Text>{props.album.artist}</Text>

    </Card>
  );
};


export default AlbumDetail;
