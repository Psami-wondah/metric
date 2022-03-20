import React from "react";
import greendot from "../../assets/svgs/greendot.svg";
type Props = {
  text: string;
  percentage: number;
};

export default function Reading({ text, percentage }: Props) {
  return (
    <div className="reading">
      <div className="reading__dot">
        <img src={greendot} alt="greendot" />
      </div>
      <div className="reading__text">
        <div className="reading__text--top">
          <span>
            {text}: {percentage}%
          </span>
        </div>
        <div className="reading__text--bottom">
          <span>Average: 0,11%</span>
        </div>
      </div>
    </div>
  );
}
