import {StyleSheet} from 'react-native';
import globalStyles, {colors} from '../../globalStyles';

const styles = StyleSheet.create({
  preview_title: {
    fontSize: 20,
    fontWeight: '900',
    marginTop: 5,
    color: colors.red,
    textAlign: 'center',
  },
  preview_description: {
    marginTop: 10,
    color: colors.purple,
    fontSize: 14,
  },
  preview_text: {
    marginTop: 10,
    color: colors.purple,
    fontSize: 17,
  },
  preview_span: {
    color: colors.green,
    fontWeight: '900',
    fontSize: 17,
  },
});

export default styles;
