import React, { useEffect, useState } from "react";
import Data from "../../components/data/Data";
import ProgressBar from "../../components/progress/ProgressBar";
import Reading from "../../components/readings/Reading";
import Tabs from "../../components/tabs/Tabs";
import searches from "../../assets/svgs/searches.svg";
import clicks from "../../assets/svgs/clicks.svg";
import sales from "../../assets/svgs/sales.svg";
import { useAppSelector, useAppThunkDispatch } from "../../redux/store";
import { setActiveTab } from "../../redux/reducers/metricSlice";
import { MetricState } from "../../types/metric";
interface Props {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export default function Days() {
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

  const getSearches = () => {
    const currentSearches =
      activeTab === "last3days"
        ? metric.data?.searches_current_last_3days
        : activeTab === "lasthour"
        ? metric.data?.searches_current_last_hour
        : activeTab === "yesterday"
        ? metric.data?.searches_current_yesterday
        : 0;
    const previousSearches =
      activeTab === "last3days"
        ? metric.data?.searches_previous_last_3days
        : activeTab === "lasthour"
        ? metric.data?.searches_previous_last_hour
        : activeTab === "yesterday"
        ? metric.data?.searches_previous_yesterday
        : 0;
    return { currentSearches, previousSearches };
  };

  const getClicks = () => {
    const currentClicks =
      activeTab === "last3days"
        ? metric.data?.clicks_current_last_3days
        : activeTab === "lasthour"
        ? metric.data?.clicks_current_last_hour
        : activeTab === "yesterday"
        ? metric.data?.clicks_current_yesterday
        : 0;
    const previousClicks =
      activeTab === "last3days"
        ? metric.data?.clicks_previous_last_3days
        : activeTab === "lasthour"
        ? metric.data?.clicks_previous_last_hour
        : activeTab === "yesterday"
        ? metric.data?.clicks_previous_yesterday
        : 0;
    const CTR =
      activeTab === "last3days"
        ? metric.data?.ctr_last_3days
        : activeTab === "lasthour"
        ? metric.data?.ctr_last_hour
        : activeTab === "yesterday"
        ? metric.data?.ctr_yesterday
        : 0;
    return { currentClicks, previousClicks, CTR };
  };

  const getSales = () => {
    const currentSales =
      activeTab === "last3days"
        ? metric.data?.bookings_current_last_3days
        : activeTab === "lasthour"
        ? metric.data?.bookings_current_last_hour
        : activeTab === "yesterday"
        ? metric.data?.bookings_current_yesterday
        : 0;
    const previousSales =
      activeTab === "last3days"
        ? metric.data?.bookings_previous_last_3days
        : activeTab === "lasthour"
        ? metric.data?.bookings_previous_last_hour
        : activeTab === "yesterday"
        ? metric.data?.bookings_previous_yesterday
        : 0;
    const STR =
      activeTab === "last3days"
        ? metric.data?.str_last_3days
        : activeTab === "lasthour"
        ? metric.data?.str_last_hour
        : activeTab === "yesterday"
        ? metric.data?.str_yesterday
        : 0;
    const Avg =
      activeTab === "last3days"
        ? metric.data?.avg_price_last_3days
        : activeTab === "lasthour"
        ? metric.data?.avg_price_last_hour
        : activeTab === "yesterday"
        ? metric.data?.avg_price_yesterday
        : 0;

    return { currentSales, previousSales, STR, Avg };
  };

  return (
    <div className="home">
      s
      <div className="home__card">
        <h2 className="home__header">Main metrics</h2>
        <Tabs />
        <div className="home__readings">
          <Reading
            text={"Errors"}
            percentage={
              activeTab === "lasthour"
                ? Number(
                    metric.data?.errors_last_hour
                      ? metric.data?.errors_last_hour?.toFixed(2)
                      : 0
                  )
                : activeTab === "yesterday"
                ? Number(metric.data?.errors_yesterday?.toFixed(2))
                : activeTab === "last3days"
                ? Number(metric.data?.errors_last_3days?.toFixed(2))
                : 0
            }
          />
          <Reading
            text={"Zeroes"}
            percentage={
              activeTab === "lasthour"
                ? Number(metric.data?.zeroes_last_hour?.toFixed(2))
                : activeTab === "yesterday"
                ? Number(metric.data?.zeroes_yesterday?.toFixed(2))
                : activeTab === "last3days"
                ? Number(metric.data?.zeroes_last_3days?.toFixed(2))
                : 0
            }
          />
          <Reading
            text={"Timeouts"}
            percentage={
              activeTab === "lasthour"
                ? Number(metric.data?.timeout_last_hour?.toFixed(2))
                : activeTab === "yesterday"
                ? Number(metric.data?.timeout_yesterday?.toFixed(2))
                : activeTab === "last3days"
                ? Number(metric.data?.timeout_last_3days?.toFixed(2))
                : 0
            }
          />
        </div>
        <ProgressBar />
        <div className="home__data">
          <Data
            logo={searches}
            name={"Searches"}
            percentage={5}
            links={["Searches", "Pessimisation"]}
            current={getSearches().currentSearches}
            previous={getSearches().previousSearches}
            children={
              <div>
                <p className="data__grid2--head">
                  Mobile traffic: {Number(data.mobile_pessimizer.toFixed(6))}%
                </p>
                <p className="data__grid2--head">
                  Web traffic: {Number(data.web_pessimizer)}%
                </p>
              </div>
            }
          />
          <div className="home__hr">
            <hr />
          </div>
          <Data
            logo={clicks}
            name={"Clicks"}
            percentage={-13}
            links={["CTR", "Cliks"]}
            current={getClicks().currentClicks}
            previous={getClicks().previousClicks}
            children={
              <div>
                <p className="data__grid2--head redCTR">
                  CTR: {getClicks().CTR}%
                </p>
              </div>
            }
          />
          <div className="home__hr">
            <hr />
          </div>
          <Data
            logo={sales}
            name={"Sales"}
            links={["STR", "Bookings", "Avg", "Check"]}
            current={getSales().currentSales}
            previous={getSales().previousSales}
            children={
              <div>
                <p className="data__grid2--head">STR: {getSales().STR}%</p>
                <p className="data__grid2--head">
                  Avg. Check: {getSales().Avg}
                </p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}
