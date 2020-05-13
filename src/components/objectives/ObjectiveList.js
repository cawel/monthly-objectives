import React from "react";
import PropTypes from "prop-types";
import { Objective } from "./Objective";

export const ObjectiveList = (props) => {
  const listObjectives = () =>
    props.objectives.map((item, index) => (
      <Objective
        key={index}
        item={item}
        index={index}
        toggleObjectiveCheck={props.toggleObjectiveCheck}
        removeObjective={props.removeObjective}
      />
    ));

  return (
    <div className="row objectiveList">
      <div className="col">
        <h3 className="card-title">
          <i className="fas fa-star" />
          Objectives
        </h3>
        <ul className="list-group user-generated-content">
          {listObjectives()}
        </ul>
      </div>
    </div>
  );
};

ObjectiveList.propTypes = {
  objectives: PropTypes.array.isRequired,
  toggleObjectiveCheck: PropTypes.func.isRequired,
  removeObjective: PropTypes.func.isRequired,
};
