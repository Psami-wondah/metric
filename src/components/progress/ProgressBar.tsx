import React, { useEffect, useState } from "react";
import Legend from "../legend/Legend";
import yellow from "../../assets/svgs/yellowsquaredot.svg";
import purple from "../../assets/svgs/purplesquaredot.svg";
import blue from "../../assets/svgs/bluesquaredot.svg";
import gray from "../../assets/svgs/graysquaredot.svg";
import { useAppSelector } from "../../redux/store";
import { MetricState } from "../../types/metric";

export default function ProgressBar() {
  const { errorsLast3Days, errorsLastHour, errorsYesterday, data, activeTab } =
    useAppSelector((state) => state.metric);
  const [metric, setMetric] = useState({} as MetricState);
  useEffect(() => {
    setMetric({
      errorsLast3Days,
      errorsLastHour,
      errorsYesterday,
      data,
      activeTab,
    });
  }, [data]);
  const colorDot = [yellow, blue, purple, gray];
  const progressColors = [
    "progress__bar--error1",
    "progress__bar--error2",
    "progress__bar--error3",
    "progress__bar--other",
  ];

  const getData = () => {
    const errors =
      activeTab === "yesterday"
        ? metric.errorsYesterday
        : activeTab === "last3days"
        ? metric.errorsLast3Days
        : activeTab === "lasthour"
        ? metric.errorsLastHour
        : activeTab === "today"
        ? []
        : [];

    var total = 0;
    errors.forEach((error) => {
      total += error.count;
    });

    return { errors, total };
  };

  const getPercent = (current_count: number) => {
    const percentage = (current_count / getData().total) * 100;
    return percentage;
  };

  return (
    <div className="progress">
      <div className="progress__bar">
        {getData().errors.map((error, index) => (
          <div
            style={{ width: `${getPercent(error.count)}%` }}
            className={progressColors[index]}
            key={index}
          ></div>
        ))}

        {/* <div style={{ width: "10%" }} className="progress__bar--other"></div> */}
      </div>
      <div className="progress__legend">
        {(activeTab === "yesterday"
          ? metric.errorsYesterday
          : activeTab === "last3days"
          ? metric.errorsLast3Days
          : activeTab === "lasthour"
          ? metric.errorsLastHour
          : activeTab === "today"
          ? []
          : []
        ).map((error, index) => (
          <Legend
            text={`Error ${error.code}`}
            value={error.count}
            dot={colorDot[index]}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
