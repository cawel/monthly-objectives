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
    console.log('componentWillReceiveProps');
    const { params } = nextProps.match;
    this.syncFirebaseDatabase(params);
  }

  syncFirebaseDatabase = params => {
    let year = params.year || getCurrentYear();
    let month = params.month || getCurrentMonth();
    if (this.ref != undefined) firebase.removeBinding(this.ref);
    this.ref = firebase.syncState(`${year}/${month}`, {
      context: this,
      state: 'objectives'
    });
  };

  componentWillUnmount() {
    firebase.removeBinding(this.ref);
  }

  addObjective = obj => {
    console.log('adding an objective');
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

  prevMonth = () => {
    let date = new Date(this.state.date);
    let newMonth = date.getMonth() - 1;
    date.setMonth(newMonth);
    this.updateMonth(date);
  };

  nextMonth = () => {
    let date = new Date(this.state.date);
    let newMonth = date.getMonth() + 1;
    date.setMonth(newMonth);
    this.updateMonth(date);
  };

  toggleObjectiveCheck = objectiveIndex => {
    console.log('check item with index ' + objectiveIndex);
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
          objectives={this.state.objectives}
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
