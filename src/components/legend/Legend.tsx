import React from "react";
type Props = {
  text: string;
  dot: string;
  value: number;
};
export default function Legend({ text, dot, value }: Props) {
  return (
    <div className="legend">
      <img src={dot} alt="dot" />
      <span className="legend__text">
        {text}: {value}
      </span>
    </div>
  );
}
