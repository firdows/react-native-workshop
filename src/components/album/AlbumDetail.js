import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

import { Card, CardSection, Button } from '../common';
// import CardSection from '../common/CardSection';
// import Button from '../common/Button';


const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const {
     thumbnailStyle,
     thumbnailContainerStyle,
     headerContentStyle,
     imageStyle,
     headerTextStyle
    } = styles;

  return (
    <Card>
      <CardSection >
          <View style={thumbnailContainerStyle}>
            <Image
              style={thumbnailStyle}
              source={{ uri: thumbnail_image }}
            />
          </View>

          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
      </CardSection>

      <CardSection>
          <Image
            style={imageStyle}
            source={{ uri: image }}
          />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)} >
          Buy Now!
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    // padding:10,
    // paddingTop:5,
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10,
  },
  imageStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: null,
  }
};

export default AlbumDetail;