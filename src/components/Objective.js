import React from "react";
import PropTypes from "prop-types";

const ObjectiveTrash = (props) => (
  <a href="#delete" onClick={props.removeObjective.bind(this, props.index)}>
    <i className="fas fa-trash-alt" />
  </a>
);

ObjectiveTrash.propTypes = {
  index: PropTypes.number.isRequired,
  removeObjective: PropTypes.func.isRequired,
};

class Objective extends React.Component {
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

export default Objective;
