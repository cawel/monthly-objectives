import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Objective from "./Objective";

const filterInputData = (objectives) => {
  // firebase will return `undefined` when no data is found
  if (!Array.isArray(objectives)) {
    return [];
  }
  return objectives;
};

class ObjectiveList extends React.Component {
  listObjectives() {
    return filterInputData(this.props.objectives).map((item, index) => (
      <li className="list-group-item" key={index}>
        <Objective
          item={item}
          index={index}
          toggleObjectiveCheck={this.props.toggleObjectiveCheck}
        />
        <a
          href="#delete"
          onClick={this.props.removeObjective.bind(this, index)}
        >
          <i className="fas fa-trash-alt" />
        </a>
      </li>
    ));
  }

  render() {
    return (
      <Fragment>
        <div className="row objectiveList">
          <div className="col ">
            <h3 className="card-title">
              <i className="fas fa-star" />
              Objectives
            </h3>
            <ul className="list-group user-generated-content">
              {this.listObjectives()}
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

ObjectiveList.propTypes = {
  objectives: PropTypes.array.isRequired,
  toggleObjectiveCheck: PropTypes.func.isRequired,
  removeObjective: PropTypes.func.isRequired,
};

export default ObjectiveList;
