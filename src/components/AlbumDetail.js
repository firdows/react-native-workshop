import React from 'react';
import {View,Text,Image} from 'react-native';

import Card from './Card';
import CardSection from './CardSection';



const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection >
          <View>
            <Text>111</Text>
          </View>

          <View>
            <Text>{props.album.title}</Text>
            <Text>{props.album.artist}</Text>
          </View>
      </CardSection>

      <CardSection>
        <Image style={styles.imageStyle} source={props.album.thumbnail_image} />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle:{
    flexDirection: 'column',
    justifyContent: 'space-arount'
  },
};

export default AlbumDetail;
