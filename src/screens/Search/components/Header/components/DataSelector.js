import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../../../style';
import DatePicker from 'react-native-date-picker';
import {useDispatch} from 'react-redux';

const DataSelector = ({title, action, date}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const confirmHandler = date => {
    setIsOpen(false);
    dispatch(action(date));
  };

  return (
    <View style={styles.header_date_container}>
      <Text>{title}</Text>

      <TouchableOpacity
        onPress={() => setIsOpen(true)}
        style={styles.header_date_button}>
        <Text style={styles.header_date_button_text}>{date || 'Pick'}</Text>
      </TouchableOpacity>

      <DatePicker
        modal
        mode="date"
        open={isOpen}
        date={date ? new Date(date) : new Date()}
        onConfirm={confirmHandler}
        onCancel={() => setIsOpen(false)}
      />
    </View>
  );
};

export default DataSelector;
