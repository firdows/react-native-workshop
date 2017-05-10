import React from 'react';
import {View,Text,Image} from 'react-native';

import Card from './Card';
import CardSection from './CardSection';



const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Image source={props.album.thumbnail_image} />
        <Text>{props.album.title}</Text>
        <Text>{props.album.artist}</Text>
      </CardSection>

      <CardSection>
        <Image style={styles.imageStyle} source={props.album.thumbnail_image} />
      </CardSection>
    </Card>
  );
};

const styles = {
  imageStyle:{
    resizeMode: 'cover',
    width: 100,
    height: 200,
    flex: 1
  }
};

export default AlbumDetail;
