import React from 'react';
import PropTypes from "prop-types";

const ContactList = ({ contacts = [], deleteContact = () => { } }) => {
  return (
    <ul>
      {contacts.map(el => {
        return <li key={el.id}>{el.name + ' ' + el.number} <button value={el.id} onClick={deleteContact}>Delete</button></li>
      })}
    </ul>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
  deleteContact: PropTypes.func,
};

export default ContactList