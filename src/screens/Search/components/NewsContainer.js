import React from 'react';
import {Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import News from '../../../images/news.png';
import globalStyles from '../../../globalStyles';
import styles from '../style';

const NewsContainer = ({
  data,
  navigation,
  maxTitleLength,
  maxDescriptionLength,
}) => {
  const pressHandler = () => {
    navigation.navigate('Preview', {
      data,
    });
  };

  const makeTextShorter = (title, limit) => {
    if (title.length <= limit) return title;
    const index = title.indexOf(' ', limit);
    if (index < 0) return title;
    return title.slice(0, index);
  };

  return (
    <TouchableOpacity
      onPress={pressHandler}
      style={[globalStyles.row, styles.news_container]}>
      <Image source={News} style={styles.news_image} />

      <View style={styles.news_text_container}>
        <Text style={styles.news_title}>
          {makeTextShorter(data.title, maxTitleLength)}
        </Text>
        <Text style={styles.news_description}>
          {makeTextShorter(data.description, maxDescriptionLength)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewsContainer;
