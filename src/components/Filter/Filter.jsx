import React, { Component } from 'react';
import PropTypes from "prop-types";

export class Filter extends Component {
  static defaultProps = {
    filter: '',
    setFilter: () => { }
  };

  static propTypes = {
    filter: PropTypes.string,
    setFilter: PropTypes.func,
  };
  render() {
    const { filter, setFilter } = this.props;
    return (
      <div>
        <p>Find contacts by name</p>
        <input type="text" value={filter} onChange={setFilter} />
      </div>
    )
  }
}

export default Filter