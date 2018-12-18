import { takeEvery, put, call } from "redux-saga/effects";
import actions from "./actions";
import types from "./types";
import api from "./api";

function* getItems() {
  try {
    yield put(actions.getItemsRequested());
    const payload = yield call(api.getItems);
    yield put(actions.getItemsFulfilled(payload.data));
  } catch (error) {
    yield put(actions.getItemsRejected(error));
  }
}

function* postItem({ item }) {
  try {
    yield put(actions.postItemRequested());
    const payload = yield call(api.postItem, item);
    yield put(actions.postItemFulfilled(payload.data));
  } catch (error) {
    yield put(actions.postItemRejected(error));
  }
}

function* deleteItem({ id }) {
  try {
    yield put(actions.deleteItemRequested());
    const payload = yield call(api.deleteItem, id);
    yield put(actions.deleteItemFulfilled(payload.data));
  } catch (error) {
    yield put(actions.deleteItemRejected(error));
  }
}

export default [
  takeEvery(types.WATCH_GETTING_ITEMS, getItems),
  takeEvery(types.WATCH_POSTING_ITEM, postItem),
  takeEvery(types.WATCH_DELETING_ITEM, deleteItem)
];
