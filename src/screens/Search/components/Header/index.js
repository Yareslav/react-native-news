import React, {useEffect, useRef} from 'react';
import {Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
//styles
import globalStyles from '../../../../globalStyles';
import styles from '../../style';
//components
import DataSelector from './components/DataSelector';
import SortOptionPicker from './components/SortOptionPicker';
import SubmitButton from './components/SubmitButton';
//reducer
import {useDispatch, useSelector} from 'react-redux';
import {
  searchTextChange,
  dateToSearchFromChange,
  dateToSearchToChange,
  changeAllowSortByDate,
  changeHeaderHeight,
} from '../../../../reducers/mainReducer';
//images
import Check from '../../../../images/check.png';

const Header = () => {
  const dispatch = useDispatch();

  const {
    dateToSearchFrom,
    dateToSearchTo,
    isAllowedToSearchByDate,
    headerHeight,
  } = useSelector(store => store.mainReducer);

  const changeTextHandler = text => {
    dispatch(searchTextChange(text));
  };

  const pressHandler = () => {
    dispatch(changeAllowSortByDate());
  };

  const layoutHandler = eve => {
    const {height} = eve.nativeEvent.layout;
    if (height !== headerHeight) dispatch(changeHeaderHeight(height));
  };

  return (
    <View style={styles.header} onLayout={layoutHandler}>
      <View style={[globalStyles.row, styles.header_row]}>
        <TextInput
          style={styles.header_input}
          onChangeText={changeTextHandler}
          placeholder="type the news title ..."
        />

        <TouchableOpacity onPress={pressHandler} style={styles.header_checkbox}>
          {isAllowedToSearchByDate && (
            <Image source={Check} style={styles.header_checkbox_image} />
          )}
        </TouchableOpacity>
      </View>

      {isAllowedToSearchByDate && (
        <View style={[globalStyles.row, styles.header_row]}>
          <DataSelector
            title="Start date"
            action={dateToSearchFromChange}
            date={dateToSearchFrom}
          />
          <DataSelector
            title="End date"
            action={dateToSearchToChange}
            date={dateToSearchTo}
          />
        </View>
      )}

      <View style={[globalStyles.row, styles.header_row]}>
        <SortOptionPicker />
        <SubmitButton />
      </View>
    </View>
  );
};

export default Header;
