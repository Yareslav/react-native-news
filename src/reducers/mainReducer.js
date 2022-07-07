import {createSlice} from '@reduxjs/toolkit';

export const sortOptions = {
  relevancy: 'relevancy',
  popularity: 'popularity',
  publishedAt: 'publishedAt',
};

const dateFormatter = date => {
  const addZero = number => (number < 10 ? '0' + number : number);

  return `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(
    date.getDate(),
  )}`;
};

const mainReducer = createSlice({
  name: 'mainReducer',

  initialState: {
    searchedNews: [],

    loading: false,
    error: false,
    nothingFound: false,

    searchText: '',
    sortBy: sortOptions.publishedAt,

    isAllowedToSearchByDate: false,
    dateToSearchFrom: '',
    dateToSearchTo: '',
    headerHeight: 0,
  },

  reducers: {
    nothingWasFound: state => {
      state.nothingFound = true;
      state.loading = false;
    },

    loadNews: (state, {payload}) => {
      state.searchedNews = payload;
      state.error = false;
      state.loading = false;
      state.nothingFound = false;
    },

    loadError: state => {
      state.error = true;
      state.loading = false;
      state.nothingFound = false;
    },

    startLoading: state => {
      state.loading = true;
      state.error = false;
      state.nothingFound = false;
      state.searchedNews = [];
    },

    searchTextChange: (state, {payload}) => {
      state.searchText = payload;
    },

    changeSortBy: (state, {payload}) => {
      state.sortBy = payload;
    },

    dateToSearchFromChange: (state, {payload}) => {
      state.dateToSearchFrom = dateFormatter(payload);
    },

    dateToSearchToChange: (state, {payload}) => {
      state.dateToSearchTo = dateFormatter(payload);
    },

    changeAllowSortByDate: state => {
      state.isAllowedToSearchByDate = !state.isAllowedToSearchByDate;
      if (!state.isAllowedToSearchByDate) {
        state.dateToSearchFrom = '';
        state.dateToSearchTo = '';
      }
    },

    changeDatePosition: state => {
      const date = state.dateToSearchTo;
      state.dateToSearchTo = state.dateToSearchFrom;
      state.dateToSearchFrom = date;
    },

    changeHeaderHeight: (state, {payload}) => {
      state.headerHeight = payload;
    },
  },
});

export default mainReducer.reducer;

export const {
  loadNews,
  loadError,
  startLoading,
  searchTextChange,
  changeSortBy,
  dateToSearchFromChange,
  dateToSearchToChange,
  changeAllowSortByDate,
  changeDatePosition,
  nothingWasFound,
  changeHeaderHeight,
} = mainReducer.actions;
