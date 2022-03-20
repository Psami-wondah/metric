import React from "react";
import { Link } from "react-router-dom";
type Props = {
  logo: string;
  name: string;
  percentage?: number;
  links: Array<string>;
  current: number;
  previous: number;
  children: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
};

export default function Data({
  logo,
  name,
  percentage,
  links,
  current,
  previous,
  children,
}: Props) {
  return (
    <div className="data">
      <div className="data__grid1">
        <div className="data__grid1--logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="data__grid1--head">
          <div className="data__grid1--head-topic">
            <span className="data__grid1--head-topic-text">{name}</span>
            <div
              className={`data__grid1--head-topic-label ${
                percentage ? (percentage > 0 ? "lemon" : "red") : ""
              }`}
            >
              {percentage
                ? (percentage > 0 ? "+" + percentage : percentage) + "%"
                : ""}
            </div>
          </div>
          <p className="data__grid1--head-body1">
            {current} <span>Yesterday</span>
          </p>

          <p className="data__grid1--head-gray data__grid1--head-body1">
            {previous} <span>Last friday</span>
          </p>
        </div>
      </div>
      <div className="data__grid2">
        {children}
        <p className="data__grid2--body1">
          You get 100% traffic on mobile and desktop devices.
        </p>
        <span className="data__grid2--body2">
          Help:{" "}
          {links.map((link, index) => (
            <span key={index}>
              <Link to={"#"}>{link}</Link>,{" "}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
