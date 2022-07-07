import {StyleSheet, Dimensions} from 'react-native';

export const maxWidth = Dimensions.get('window').width;
export const screenMargins = 10 * 2;
export const colors = {
  purple: '#8B95C9',
  green: '#84DCC6',
  blue: '#ACD7EC',
  red: '#D64014',
};
export const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const globalStyles = StyleSheet.create({
  full: {
    width: '100%',
    height: '100%',
  },
  container: {
    width: maxWidth - 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    marginBottom: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default globalStyles;
