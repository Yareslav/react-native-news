import {StyleSheet, Dimensions} from 'react-native';
import {maxWidth, screenMargins, colors, center} from '../../globalStyles';

const maxHeight = Dimensions.get('window').height;
const headerPadding = 5;
const newsImageWidth = 25;

const styles = StyleSheet.create({
  title: {
    fontWeight: '900',
    fontSize: 25,
  },
  loading: {
    color: colors.green,
  },
  error: {
    color: colors.red,
  },
  nothing_found: {
    color: colors.blue,
  },
  //generalscreenMargins
  header: {
    width: '100%',
    minHeight: 50,
    padding: headerPadding,
    backgroundColor: colors.purple,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
  },
  header_row: {
    marginTop: 5,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  main_content_small_margin: {
    marginTop: 100,
  },
  main_content_big_margin: {
    marginTop: 150,
  },
  //input
  header_input: {
    width: maxWidth - headerPadding * 2 - 50,
    borderRadius: 15,
    backgroundColor: colors.blue,
    maxHeight: 25,
    paddingVertical: 0,
    paddingLeft: 5,
  },
  //buttons
  header_button_container: {
    width: '30%',
  },
  header_button: {
    width: '100%',
    height: 25,
    borderRadius: 15,
    backgroundColor: colors.green,
    ...center,
  },
  header_button_text: {
    color: colors.red,
    fontSize: 15,
    fontWeight: '700',
  },
  header_button_disabled: {
    opacity: 0.3,
  },
  //date styles
  header_date_container: {
    display: 'flex',
    width: '45%',
    alignItems: 'center',
  },
  header_date_button: {
    width: '95%',
    marginTop: 5,
    height: 20,
    backgroundColor: colors.green,
    borderRadius: 20,
    ...center,
  },
  header_date_button_text: {
    color: colors.purple,
    fontWeight: '800',
  },
  header_picker: {
    width: '60%',
    backgroundColor: colors.blue,
    minHeight: 40,
  },
  //checkBox
  header_checkbox: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderColor: colors.blue,
    borderWidth: 2,
    ...center,
  },
  header_checkbox_image: {
    width: 24,
    height: 24,
  },
  //news container
  news_container: {
    marginTop: 15,
    width: '100%',
    backgroundColor: colors.blue,
    borderRadius: 20,
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  news_image: {
    width: newsImageWidth,
    height: newsImageWidth,
  },
  news_title: {
    fontSize: 17,
    color: colors.red,
    fontWeight: '900',
  },
  news_description: {
    marginTop: 5,
    fontSize: 12,
    color: colors.purple,
    maxHeight: 75,
  },
  news_text_container: {
    width: maxWidth - screenMargins - newsImageWidth - 10,
  },
});

export default styles;
