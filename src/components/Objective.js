import React from "react";
import PropTypes from "prop-types";
import { ObjectiveTrash } from "./ObjectiveTrash";

export class Objective extends React.Component {
  toggleObjectiveCheck = () => {
    this.props.toggleObjectiveCheck(this.props.index);
  };

  render() {
    return (
      <li className="list-group-item" key={this.props.index}>
        <span className="objective">
          <input
            type="checkbox"
            checked={this.props.item.checked === true}
            onChange={this.toggleObjectiveCheck}
            index={this.props.index}
          />
          <span
            className={
              this.props.item.checked ? "name done text-muted" : "name"
            }
          >
            {this.props.item.name}
          </span>
          <ObjectiveTrash
            removeObjective={this.props.removeObjective}
            index={this.props.index}
          />
        </span>
      </li>
    );
  }
}

Objective.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  toggleObjectiveCheck: PropTypes.func.isRequired,
  removeObjective: PropTypes.func.isRequired,
};
