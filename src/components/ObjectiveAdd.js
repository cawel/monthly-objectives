import React from 'react';

class ObjectiveAdd extends React.Component {
  nameRef = React.createRef();

  createObjective = event => {
    event.preventDefault();
    const objective = {
      name: this.nameRef.value.value,
      checked: false
    };
    this.props.addObjective(objective);
    event.currentTarget.reset();
  };

  render() {
    return (
      <div className="row">
        <div className="col">
          <form
            className="objectiveNew form-inline"
            onSubmit={this.createObjective}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                ref={this.nameRef}
                required
                size="40"
                placeholder="my new objective..."
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary " type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ObjectiveAdd;
