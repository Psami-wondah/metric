import { call, takeEvery, put } from "redux-saga/effects";

import {
  getMetricData,
  getMetricDataError,
  getMetricDataSuccess,
} from "../actions/metric";
import { getMetricData as getMetricDataAPI } from "../../api";

function* getALLMetricData() {
  try {
    const res: object = yield call(getMetricDataAPI as any, {});
    yield put(getMetricDataSuccess(res));
  } catch (err) {
    yield put(getMetricDataError());
  }
}

//--> general saga watcher for users
function* metricSagas() {
  yield takeEvery(getMetricData.type, getALLMetricData);
}

export default metricSagas;
