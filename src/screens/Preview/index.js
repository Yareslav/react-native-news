import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View, Image} from 'react-native';
import styles from './style';
import globalStyles, {screenMargins, maxWidth} from '../../globalStyles';

const Preview = ({route}) => {
  const [imageSize, setImageSize] = useState({width: null, height: null});

  const {
    data: {urlToImage, author, title, publishedAt, description, source},
  } = route.params;

  useEffect(() => {
    let mounted = true;
    const actualWidth = maxWidth - screenMargins;

    if (!urlToImage) return;

    //getting sizeof image to correctly display it
    Image.getSize(urlToImage, (width, height) => {
      //! if the componment had been removed before its size was set
      if (!mounted) return;
      const proportion = height / width;

      setImageSize({
        width: actualWidth,
        height: actualWidth * proportion,
      });
    });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <ScrollView style={globalStyles.container}>
      <Image
        style={[imageSize.width && imageSize]}
        source={{uri: urlToImage}}
      />

      <Text style={styles.preview_title}>{title}</Text>
      <Text style={styles.preview_description}>{description}</Text>

      <Text style={styles.preview_text}>
        Author : <Text style={styles.preview_span}>{author}</Text>
      </Text>

      <Text style={styles.preview_text}>
        Published at : <Text style={styles.preview_span}>{publishedAt}</Text>
      </Text>

      <Text style={styles.preview_text}>
        Source : <Text style={styles.preview_span}>{source}</Text>
      </Text>
    </ScrollView>
  );
};

export default Preview;
