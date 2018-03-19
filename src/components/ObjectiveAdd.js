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
      <form className="objectiveNew" onSubmit={this.createObjective}>
        <input
          type="text"
          name="name"
          ref={this.nameRef}
          required
          placeholder="my objective..."
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default ObjectiveAdd;
