import { all, call, spawn } from "redux-saga/effects";
import metricSagas from "./saga";

function* rootSaga() {
  const sagas = [metricSagas];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            return;
          }
        }
      })
    )
  );
}

export default rootSaga;
