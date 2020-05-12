import React, { useState } from "react";
import PropTypes from "prop-types";

export const ObjectiveAdd = (props) => {
  const [objectiveName, setObjectiveName] = useState("");
  const onObjectiveNameChange = (event) => setObjectiveName(event.target.value);

  const createObjective = (event) => {
    if (!objectiveName) return;

    event.preventDefault();
    const objective = {
      name: objectiveName,
      checked: false,
    };
    props.addObjective(objective);
    onObjectiveNameChange({ target: { value: "" } });
  };

  return (
    <div className="row">
      <div className="col">
        <form className="objective-new form-inline" onSubmit={createObjective}>
          <div className="form-group">
            <input
              type="text"
              className="form-control user-generated-content"
              required
              value={objectiveName}
              onChange={onObjectiveNameChange}
              size="40"
              placeholder="my new objective..."
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary " type="submit">
              <i className="fas fa-plus" />
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ObjectiveAdd.propTypes = {
  addObjective: PropTypes.func.isRequired,
};
