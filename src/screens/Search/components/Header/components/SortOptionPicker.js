import React, {useEffect, useMemo} from 'react';
import styles from '../../../style';
import {Picker} from '@react-native-picker/picker';
import {sortOptions, changeSortBy} from '../../../../../reducers/mainReducer';
import {useDispatch, useSelector} from 'react-redux';

const SortOptionPicker = () => {
  const dispatch = useDispatch();
  const {sortBy} = useSelector(store => store.mainReducer);

  const options = useMemo(() => {
    return Object.values(sortOptions).map(option => (
      <Picker.Item
        label={option === sortOptions.publishedAt ? 'published at' : option}
        value={option}
        key={option}
      />
    ));
  }, [sortBy]);

  return (
    <Picker
      style={styles.header_picker}
      selectedValue={sortBy}
      onValueChange={itemValue => dispatch(changeSortBy(itemValue))}>
      {options}
    </Picker>
  );
};
export default SortOptionPicker;
