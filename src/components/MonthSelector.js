import React from "react";
import PropTypes from "prop-types";

export const MonthSelector = (props) => {
  return (
    <div className="row">
      <header>
        <a href="#previous" className="monthArrow" onClick={props.prevMonth}>
          &lt;&lt;
        </a>
        <h1 className="monthSelector">
          <span className="month">{`${props.month} ${props.year}`}</span>
        </h1>
        <a href="#next" className="monthArrow" onClick={props.nextMonth}>
          &gt;&gt;
        </a>
      </header>
    </div>
  );
};

MonthSelector.propTypes = {
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  prevMonth: PropTypes.func.isRequired,
  nextMonth: PropTypes.func.isRequired,
};
