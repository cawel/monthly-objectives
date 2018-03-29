import React from 'react';
import PropTypes from 'prop-types';

class ObjectiveAdd extends React.Component {
  nameRef = React.createRef();

  static propTypes = {
    addObjective: PropTypes.func.isRequired
  };

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
            className="objective-new form-inline"
            onSubmit={this.createObjective}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control user-generated-content"
                ref={this.nameRef}
                required
                size="40"
                placeholder="my new objective..."
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary " type="submit">
                <i className="fas fa-plus" />Add
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ObjectiveAdd;
