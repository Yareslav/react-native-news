import makeARequest from '../makeARequest';
import {
  startLoading,
  loadError,
  loadNews,
  nothingWasFound,
} from '../../reducers/mainReducer';

const serachNews = obj => {
  return async dispatch => {
    dispatch(startLoading());

    const result = await makeARequest(obj);

    if (result.error) {
      dispatch(loadError());
      if (result.message) alert(result.message);
      return;
    }

    if (result.message.length === 0) dispatch(nothingWasFound());
    else dispatch(loadNews(result.message));
  };
};

export default serachNews;
