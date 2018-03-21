import React from 'react';

class Objective extends React.Component {
  toggleObjectiveCheck = event => {
    this.props.toggleObjectiveCheck(this.props.index);
  };

  render() {
    return (
      <span className="objective">
        <input
          type="checkbox"
          checked={this.props.item.checked === true}
          onChange={this.toggleObjectiveCheck}
          index={this.props.index}
        />
        <span
          className={this.props.item.checked ? 'name done text-muted' : 'name'}
        >
          {this.props.item.name}
        </span>
      </span>
    );
  }
}

export default Objective;
