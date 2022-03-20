import { createSlice } from "@reduxjs/toolkit";
import {
  ActiveTab,
  MetricData,
  MetricPayloadState,
  MetricState,
} from "../../types/metric";

import {
  getMetricData,
  getMetricDataError,
  getMetricDataSuccess,
  fetchingMetricData,
} from "../actions/metric";

const initialState = {
  errorsLast3Days: [],
  errorsYesterday: [],
  errorsLastHour: [],
  data: {
    bookings_current_last_3days: 0,
    timeout_yesterday: 0,
    zeroes_yesterday: 0,
    avg_price_yesterday: 0,
    clicks_current_last_hour: 0,
    avg_price_last_hour: 0,
    zeroes_last_hour: 0,
    mobile_pessimizer: 0,
    bookings_current_last_hour: 0,
    searches_current_last_3days: 0,
    bookings_previous_last_hour: 0,
    str_yesterday: 0,
    errors_yesterday: 0,
    ctr_last_hour: 0,
    ctr_yesterday: 0,
    searches_current_yesterday: 0,
    bookings_previous_last_3days: 0,
    zeroes_last_3days: 0,
    clicks_previous_last_hour: 0,
    timeout_last_3days: 0,
    errors_last_3days: 0,
    bookings_previous_yesterday: 0,
    searches_previous_yesterday: 0,
    searches_previous_last_hour: 0,
    str_last_hour: 0,
    clicks_previous_yesterday: 0,
    avg_price_last_3days: 0,
    searches_current_last_hour: 0,
    web_pessimizer: 0,
    ctr_last_3days: 0,
    clicks_previous_last_3days: 0,
    str_last_3days: 0,
    timeout_last_hour: 0,
    clicks_current_last_3days: 0,
    bookings_current_yesterday: 0,
    searches_previous_last_3days: 0,
    errors_last_hour: 0,
    clicks_current_yesterday: 0,
  },
  activeTab: "today" as ActiveTab,
  status: "loading",
};

export const metricSlice = createSlice({
  name: "metric",
  initialState,
  reducers: {
    [getMetricDataSuccess.type]: (state, action) => {
      const data = action.payload as MetricPayloadState;
      state.errorsLast3Days = data.errors_last_3days as [];
      state.errorsLastHour = data.errors_last_hour as [];
      state.errorsYesterday = data.errors_yesterday as [];
      state.data = data.data[0];
      state.status = "success";
    },
    [getMetricDataError.type]: (state, action) => {
      state.status = "failed";
    },
    [fetchingMetricData.type]: (state) => {
      state.status = "loading";
    },
    setData: (state, action) => {
      const data = action.payload as MetricPayloadState;
      state.errorsLast3Days = data.errors_last_3days as [];
      state.errorsLastHour = data.errors_last_hour as [];
      state.errorsYesterday = data.errors_yesterday as [];
      state.data = data.data[0];
      state.status = "success";
    },

    setActiveTab: (state, action) => {
      state.activeTab = action.payload as ActiveTab;
    },
  },
});

export const { setActiveTab, setData } = metricSlice.actions;

// reducer
// export const metricReducer = metricSlice.reducer;
