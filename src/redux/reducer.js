import Type from './types';

const INIT_STATE = {
  news: [],
  page: 1
};

export const reducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case Type.GET_NEWS:
      return {...state, news: payload };
    case Type.INCREMENT_PAGE:
      return {...state, page: state.page += 1 };

    default:
      return state;
  }
};