import React from 'react';
import PropTypes from 'prop-types';
import monthAndYearToString from '../helpers';

class MonthSelector extends React.Component {
  static propTypes = {
    prevMonth: PropTypes.func.isRequired,
    nextMonth: PropTypes.func.isRequired
  };
  render() {
    return (
      <h1 className="monthSelector">
        <button className="monthArrow" onClick={this.props.prevMonth}>
          &lt;&lt;
        </button>
        <span className="month">{monthAndYearToString(this.props.date)}</span>
        <button className="monthArrow" onClick={this.props.nextMonth}>
          &gt;&gt;
        </button>
      </h1>
    );
  }
}

export default MonthSelector;
