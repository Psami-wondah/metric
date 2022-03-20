export interface Error {
  count: number;
  code: number;
}
export interface MetricData {
  bookings_current_last_3days: number;
  timeout_yesterday: number;
  zeroes_yesterday: number;
  avg_price_yesterday: number;
  clicks_current_last_hour: number;
  avg_price_last_hour: number;
  zeroes_last_hour: number;
  mobile_pessimizer: number;
  bookings_current_last_hour: number;
  searches_current_last_3days: number;
  bookings_previous_last_hour: number;
  str_yesterday: number;
  errors_yesterday: number;
  ctr_last_hour: number;
  ctr_yesterday: number;
  searches_current_yesterday: number;
  bookings_previous_last_3days: number;
  zeroes_last_3days: number;
  clicks_previous_last_hour: number;
  timeout_last_3days: number;
  errors_last_3days: number;
  bookings_previous_yesterday: number;
  searches_previous_yesterday: number;
  searches_previous_last_hour: number;
  str_last_hour: number;
  clicks_previous_yesterday: number;
  avg_price_last_3days: number;
  searches_current_last_hour: number;
  web_pessimizer: number;
  ctr_last_3days: number;
  clicks_previous_last_3days: number;
  str_last_3days: number;
  timeout_last_hour: number;
  clicks_current_last_3days: number;
  bookings_current_yesterday: number;
  searches_previous_last_3days: number;
  errors_last_hour: number;
  clicks_current_yesterday: number;
}
export type ActiveTab = "today" | "yesterday" | "lasthour" | "last3days";

export interface MetricState {
  errorsLast3Days: Array<Error>;
  errorsLastHour: Array<Error>;
  errorsYesterday: Array<Error>;
  data: MetricData;
  activeTab: ActiveTab;
}

export interface MetricPayloadState {
  errors_last_3days: Array<Error>;
  errors_last_hour: Array<Error>;
  errors_yesterday: Array<Error>;
  data: Array<MetricData>;
}
