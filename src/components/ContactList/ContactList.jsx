import React, { Component } from 'react';
import PropTypes from "prop-types";

export class ContactList extends Component {
  static defaultProps = {
    contacts: [],
    deleteContact: () => { }
  };

  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })),
    deleteContact: PropTypes.func,
  };

  render() {
    const { contacts, deleteContact } = this.props;

    return (
      <ul>
        {contacts.map(el => {
          return <li key={el.id}>{el.name + ' ' + el.number} <button value={el.id} onClick={deleteContact}>Delete</button></li>
        })}
      </ul>
    )
  }
}

export default ContactList