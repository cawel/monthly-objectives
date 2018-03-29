import React from 'react';
import PropTypes from 'prop-types';
import monthAndYearToString from '../helpers';

class MonthSelector extends React.Component {
  static propTypes = {
    date: PropTypes.object.isRequired,
    prevMonth: PropTypes.func.isRequired,
    nextMonth: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="row">
        <header>
          <a
            href="#previous"
            className="monthArrow"
            onClick={this.props.prevMonth}
          >
            &lt;&lt;
          </a>
          <h1 className="monthSelector">
            <span className="month">
              {monthAndYearToString(this.props.date)}
            </span>
          </h1>
          <a href="#next" className="monthArrow" onClick={this.props.nextMonth}>
            &gt;&gt;
          </a>
        </header>
      </div>
    );
  }
}

export default MonthSelector;
