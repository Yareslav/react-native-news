import styles from '../../../style';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import searchNews from '../../../../../api/thunks/searchNews';
import {changeDatePosition} from '../../../../../reducers/mainReducer';

const SubmitButton = () => {
  const {
    searchText,
    sortBy,
    isAllowedToSearchByDate,
    dateToSearchFrom,
    dateToSearchTo,
  } = useSelector(store => store.mainReducer);

  const dispatch = useDispatch();

  const isDisabled =
    searchText
      .split('')
      .filter(char => char != ' ')
      .join('') === '';

  const pressHandler = () => {
    const isSearchToDateSmaller =
      +new Date(dateToSearchFrom) > +new Date(dateToSearchTo);

    if (dateToSearchFrom && dateToSearchTo && isSearchToDateSmaller) {
      dispatch(changeDatePosition());
      alert(
        'warning end date is bigger than start date , so they will be reversed',
      );
    }

    dispatch(
      searchNews({
        searchText,
        sortBy,
        isAllowedToSearchByDate,
        dateToSearchFrom,
        dateToSearchTo,
      }),
    );
  };

  return (
    <View
      style={[
        styles.header_button_container,
        isDisabled && styles.header_button_disabled,
      ]}>
      <TouchableOpacity
        style={styles.header_button}
        disabled={isDisabled}
        onPress={pressHandler}>
        <Text style={styles.header_button_text}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubmitButton;
