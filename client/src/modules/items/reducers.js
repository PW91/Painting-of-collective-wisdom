import types from "./types";

const defaultState = {
  items: [],
  loadingFlag: false,
  errorFlag: false,
  errorMsg: null
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case types.GET_ITEMS_REQUESTED: {
      return {
        ...state,
        loadingFlag: true
      };
    }

    case types.GET_ITEMS_FULFILLED: {
      return {
        ...state,
        items: action.payload,
        loadingFlag: false
      };
    }

    case types.GET_ITEMS_REJECTED: {
      return {
        ...state,
        loadingFlag: false,
        errorFlag: true,
        errorMsg: action.payload.message
      };
    }

    case types.POST_ITEM_REQUESTED: {
      return {
        ...state,
        loadingFlag: true
      };
    }

    case types.POST_ITEM_FULFILLED: {
      return {
        ...state,
        items: [action.payload, ...state.items],
        loadingFlag: false
      };
    }

    case types.POST_ITEM_REJECTED: {
      return {
        ...state,
        loadingFlag: false,
        errorFlag: true,
        errorMsg: action.payload.message
      };
    }

    case types.DELETE_ITEM_REQUESTED: {
      return {
        ...state,
        loadingFlag: true
      };
    }

    case types.DELETE_ITEM_FULFILLED: {
      const filteredItems = state.items.filter(item => item._id !== action.id);

      return {
        ...state,
        loadingFlag: false,
        items: filteredItems
      };
    }

    case types.DELETE_ITEM_REJECTED: {
      return {
        ...state,
        loadingFlag: false,
        errorFlag: true,
        errorMsg: action.payload.message
      };
    }

    default:
      return state;
  }
}
