import { LOAD_OKR_LIST } from '../actions'

const initialState = {
  OkrList: []
};

export default function OkrApp(state = initialState, action) {
  switch (action.type) {
    case LOAD_OKR_LIST:
        return {
          ...state,
          OkrList: action.OkrList
    };
    default:
      return state;
  }
}
