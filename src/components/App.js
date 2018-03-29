import React, { Fragment } from 'react';
import ObjectiveList from './ObjectiveList';
import MonthSelector from './MonthSelector';
import ObjectiveAdd from './ObjectiveAdd';
import Footer from './Footer';
import Login from './Login';
import firebase from '../base';
import {
  getMonth,
  getCurrentMonth,
  getCurrentYear,
  isLoggedIn
} from '../helpers';

class App extends React.Component {
  state = {
    date: new Date(),
    objectives: []
  };

  componentDidMount() {
    const { params } = this.props.match;
    this.syncFirebaseDatabase(params);
  }

  componentWillReceiveProps(nextProps) {
    const { params } = nextProps.match;
    this.syncFirebaseDatabase(params);
  }

  syncFirebaseDatabase = params => {
    let year = params.year || getCurrentYear();
    let month = params.month || getCurrentMonth();
    this.unsyncFirebaseDatabase();
    this.dbRef = firebase.syncState(`${year}/${month}`, {
      context: this,
      state: 'objectives'
    });
  };

  unsyncFirebaseDatabase = () => {
    if (this.dbRef !== undefined) firebase.removeBinding(this.dbRef);
  };

  componentWillUnmount() {
    this.unsyncFirebaseDatabase();
  }

  objectivesList = () => {
    let list = this.state.objectives;
    // firebase will return an empty object when no data is found
    if (!Array.isArray(list)) {
      list = [];
    }
    return list;
  };

  addObjective = obj => {
    let objectives = Object.assign([], this.state.objectives);
    objectives.push(obj);
    this.setState({ objectives });
  };

  removeObjective = (index, event) => {
    let objectives = Object.assign([], this.state.objectives);
    objectives.splice(index, 1);
    this.setState({ objectives });
  };

  updateMonth = date => {
    this.setState({ date });
    this.props.history.push(
      `/${date.getFullYear()}/${getMonth(date).toLowerCase()}`
    );
  };

  prevMonth = event => {
    event.preventDefault();
    let date = new Date(this.state.date);
    let newMonth = date.getMonth() - 1;
    date.setMonth(newMonth);
    this.updateMonth(date);
  };

  nextMonth = event => {
    event.preventDefault();
    let date = new Date(this.state.date);
    let newMonth = date.getMonth() + 1;
    date.setMonth(newMonth);
    this.updateMonth(date);
  };

  toggleObjectiveCheck = objectiveIndex => {
    let objectives = Object.assign([], this.state.objectives);
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
          date={this.state.date}
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

export default App;
