import React from 'react';
import PropTypes from "prop-types";

const Filter = ({ filter = '', setFilter = () => { } }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={setFilter} />
    </div>
  )
}
Filter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
};

export default Filter