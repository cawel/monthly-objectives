import React, { Fragment } from 'react';
import Objective from './Objective';

class ObjectiveList extends React.Component {
  listObjectives() {
    return (
      Array.isArray(this.props.objectives) &&
      this.props.objectives.map((item, index) => (
        <li key={index}>
          <Objective
            item={item}
            index={index}
            toggleObjectiveCheck={this.props.toggleObjectiveCheck}
          />
          <button onClick={this.props.removeObjective.bind(this, index)}>
            x
          </button>
        </li>
      ))
    );
  }

  render() {
    return (
      <Fragment>
        <ul className="list">{this.listObjectives()}</ul>
        Nb objectives: {this.props.objectives.length}
      </Fragment>
    );
  }
}

export default ObjectiveList;
