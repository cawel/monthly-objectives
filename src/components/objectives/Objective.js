import React from "react";
import PropTypes from "prop-types";
import { ObjectiveTrash } from "./ObjectiveTrash";

export const Objective = (props) => (
  <li className="list-group-item" key={props.index}>
    <span className="objective">
      <input
        type="checkbox"
        checked={props.item.checked === true}
        onChange={props.toggleObjectiveCheck.bind(this, props.index)}
        index={props.index}
      />

      <span className={props.item.checked ? "name done text-muted" : "name"}>
        {props.item.name}
      </span>

      <ObjectiveTrash
        removeObjective={props.removeObjective}
        index={props.index}
      />
    </span>
  </li>
);

Objective.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  toggleObjectiveCheck: PropTypes.func.isRequired,
  removeObjective: PropTypes.func.isRequired,
};
