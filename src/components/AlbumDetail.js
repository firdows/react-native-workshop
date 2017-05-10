import React from 'react';
import {View,Text,Image} from 'react-native';

import Card from './Card';
import CardSection from './CardSection';



const AlbumDetail = ({album}) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { thumbnailStyle, headerContentStyle, imageStyle } = styles;

  return (
    <Card>
      <CardSection >
          <View>
            <Image
              style={thumbnailStyle}
              source={{ uri:thumbnail_image }}
            />
          </View>

          <View style={headerContentStyle}>
            <Text>{title}</Text>
            <Text>{artist}</Text>
          </View>
      </CardSection>

      <CardSection>
        <View>
          <Image
            style={imageStyle}
            source={{ uri:image }}
          />
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle:{
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding:10,
    paddingTop:5,
  },
  thumbnailStyle:{
    height: 50,
    width:50,
  },
  imageStyle:{
    //flex:1,
    height: 100,
    width:100,
  }
};

export default AlbumDetail;
