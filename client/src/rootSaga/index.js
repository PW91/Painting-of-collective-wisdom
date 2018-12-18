import { all } from "redux-saga/effects";
import { itemsSaga } from "../modules/items";

export default function* rootSaga() {
  yield all([...itemsSaga]);
}
