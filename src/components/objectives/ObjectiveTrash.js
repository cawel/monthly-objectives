import React from "react";
import PropTypes from "prop-types";

export const ObjectiveTrash = (props) => (
  <a href="#delete" onClick={props.removeObjective.bind(this, props.index)}>
    <i className="fas fa-trash-alt" />
  </a>
);

ObjectiveTrash.propTypes = {
  index: PropTypes.number.isRequired,
  removeObjective: PropTypes.func.isRequired,
};
