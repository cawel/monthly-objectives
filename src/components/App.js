import React, { Fragment } from "react";
import PropTypes from "prop-types";

import ObjectiveList from "./ObjectiveList";
import MonthSelector from "./MonthSelector";
import ObjectiveAdd from "./ObjectiveAdd";
import Footer from "./Footer";
import Login from "./Login";
import firebase from "../base";
import {
  getMonth,
  parseDate,
  getCurrentMonth,
  getCurrentYear,
  isLoggedIn,
} from "../helpers";

class App extends React.Component {
  constructor(props) {
    super(props);
    const { params } = this.props.match;
    this.state.year = this.yearFromParams(params);
    this.state.monthAsString = this.monthFromParams(params);
  }

  defaultMonth = () => getCurrentMonth().toLowerCase();

  state = {
    year: getCurrentYear(),
    monthAsString: this.defaultMonth(),
    objectives: [],
  };

  componentDidMount() {
    const { params } = this.props.match;
    this.syncFirebaseDatabase(params);
  }

  componentWillUnmount() {
    this.unsyncFirebaseDatabase();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { params } = nextProps.match;
    this.syncFirebaseDatabase(params);
  }

  monthFromParams = (params) => params.month || this.defaultMonth();
  yearFromParams = (params) => params.year || getCurrentYear();

  syncFirebaseDatabase = (params) => {
    this.unsyncFirebaseDatabase();
    this.dbRef = firebase.syncState(
      `${this.yearFromParams(params)}/${this.monthFromParams(params)}`,
      {
        context: this,
        state: "objectives",
      }
    );
  };

  unsyncFirebaseDatabase = () => {
    if (this.dbRef !== undefined) firebase.removeBinding(this.dbRef);
  };

  objectivesList = () => {
    const list = this.state.objectives;
    // firebase will return an empty object when no data is found
    if (!Array.isArray(list)) {
      return [];
    }
    return list;
  };

  addObjective = (obj) => {
    const objectives = Object.assign([], this.state.objectives);
    objectives.push(obj);
    this.setState({ objectives });
  };

  removeObjective = (index) => {
    const objectives = Object.assign([], this.state.objectives);
    objectives.splice(index, 1);
    this.setState({ objectives });
  };

  updateMonth = (date) => {
    const monthAsString = getMonth(date).toLowerCase();
    const year = date.getFullYear();
    this.setState({ monthAsString, year });
    this.props.history.push(`/${date.getFullYear()}/${monthAsString}`);
  };

  prevMonth = (event) => {
    event.preventDefault();
    const date = parseDate(this.state.monthAsString, this.state.year);
    const newMonth = date.getMonth() - 1;
    date.setMonth(newMonth);
    this.updateMonth(date);
  };

  nextMonth = (event) => {
    event.preventDefault();
    const date = parseDate(this.state.monthAsString, this.state.year);
    const newMonth = date.getMonth() + 1;
    date.setMonth(newMonth);
    this.updateMonth(date);
  };

  toggleObjectiveCheck = (objectiveIndex) => {
    const objectives = Object.assign([], this.state.objectives);
    objectives[objectiveIndex].checked = !objectives[objectiveIndex].checked;
    this.setState({ objectives });
  };

  render() {
    if (!isLoggedIn()) {
      return (
        <Fragment>
          <Login history={this.props.history} />
          <Footer />
        </Fragment>
      );
    }

    return (
      <Fragment>
        <MonthSelector
          month={this.state.monthAsString}
          year={String(this.state.year)}
          prevMonth={this.prevMonth}
          nextMonth={this.nextMonth}
        />
        <ObjectiveList
          objectives={this.objectivesList()}
          toggleObjectiveCheck={this.toggleObjectiveCheck}
          removeObjective={this.removeObjective}
        />
        <ObjectiveAdd addObjective={this.addObjective} />

        <Footer history={this.props.history} />
      </Fragment>
    );
  }
}

App.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
};

export default App;
