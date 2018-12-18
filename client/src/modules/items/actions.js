import types from "./types";

function watchGettingItems() {
  return {
    type: types.WATCH_GETTING_ITEMS
  };
}

function getItemsRequested() {
  return {
    type: types.GET_ITEMS_REQUESTED
  };
}

function getItemsFulfilled(payload) {
  return {
    type: types.GET_ITEMS_FULFILLED,
    payload
  };
}

function getItemsRejected(error) {
  return {
    type: types.GET_ITEMS_REJECTED,
    payload: error
  };
}

function watchPostingItem(item) {
  return {
    type: types.WATCH_POSTING_ITEM,
    item
  };
}

function postItemRequested() {
  return {
    type: types.POST_ITEM_REQUESTED
  };
}

function postItemFulfilled(payload) {
  return {
    type: types.POST_ITEM_FULFILLED,
    payload
  };
}

function postItemRejected(error) {
  return {
    type: types.POST_ITEM_REJECTED,
    payload: error
  };
}

function watchDeletingItem(id) {
  return {
    type: types.WATCH_DELETING_ITEM,
    id
  };
}

function deleteItemRequested() {
  return {
    type: types.DELETE_ITEM_REQUESTED
  };
}

function deleteItemFulfilled(payload) {
  return {
    type: types.DELETE_ITEM_FULFILLED,
    id: payload.id
  };
}

function deleteItemRejected(error) {
  return {
    type: types.DELETE_ITEM_REJECTED,
    payload: error
  };
}

export default {
  watchGettingItems,
  getItemsRequested,
  getItemsFulfilled,
  getItemsRejected,
  watchPostingItem,
  postItemRequested,
  postItemFulfilled,
  postItemRejected,
  watchDeletingItem,
  deleteItemRequested,
  deleteItemFulfilled,
  deleteItemRejected
};
