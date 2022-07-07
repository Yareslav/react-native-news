import React, {useEffect, useRef} from 'react';
import {SafeAreaView, ScrollView, Text, View, FlatList} from 'react-native';
import globalStyles from '../../globalStyles';
import styles from './style';

import {useSelector, useDispatch} from 'react-redux';

import Header from './components/Header/index';
import NewsContainer from './components/NewsContainer';

const List = ({navigation}) => {
  const dispatch = useDispatch();

  const {error, loading, searchedNews, nothingFound, headerHeight} =
    useSelector(store => store.mainReducer);

  return (
    <>
      <Header />
      <View style={[globalStyles.container, {marginTop: headerHeight + 10}]}>
        {loading && (
          <Text style={[styles.title, styles.loading]}>Loading ...</Text>
        )}

        {error && (
          <Text style={[styles.title, styles.error]}>Error occured</Text>
        )}

        {nothingFound && (
          <Text style={[styles.title, styles.nothing_found]}>
            Noting was found
          </Text>
        )}

        <FlatList
          data={searchedNews}
          renderItem={({item}) => (
            <NewsContainer
              navigation={navigation}
              data={item}
              maxTitleLength={80}
              maxDescriptionLength={200}
            />
          )}
          keyExtractor={item => item.key}
        />
      </View>
    </>
  );
};

export default List;
