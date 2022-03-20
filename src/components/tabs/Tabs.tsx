import React from "react";
import { setActiveTab } from "../../redux/reducers/metricSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";

export default function Tabs() {
  const { activeTab } = useAppSelector((state) => state.metric);
  const dispatch = useAppDispatch();
  return (
    <div className="tab">
      <div className="tab__main">
        <div
          className={`tab__main--first ${
            activeTab === "lasthour" ? "selected" : ""
          }`}
          onClick={() => {
            dispatch(setActiveTab("lasthour"));
          }}
        >
          Last hour
        </div>
        <div
          className={`${activeTab === "today" ? "selected" : ""}`}
          onClick={() => {
            dispatch(setActiveTab("today"));
          }}
        >
          Today
        </div>
        <div
          className={`${activeTab === "yesterday" ? "selected" : ""}`}
          onClick={() => {
            dispatch(setActiveTab("yesterday"));
          }}
        >
          Yesterday
        </div>
        <div
          className={`tab__main--last   ${
            activeTab === "last3days" ? "selected" : ""
          }`}
          onClick={() => {
            dispatch(setActiveTab("last3days"));
          }}
        >
          Last 3 days
        </div>
      </div>
    </div>
  );
}
