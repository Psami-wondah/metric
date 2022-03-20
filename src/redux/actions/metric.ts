import { createAction } from "@reduxjs/toolkit";
export const getMetricData = createAction("GET_METRIC_DATA");
export const getMetricDataError = createAction("GET_METRIC_DATA_ERROR");
export const fetchingMetricData = createAction("FETCHING_METRIC_DATA");
export const getMetricDataSuccess = createAction<object>(
  "GET_METRIC_DATA_SUCCESS"
);
