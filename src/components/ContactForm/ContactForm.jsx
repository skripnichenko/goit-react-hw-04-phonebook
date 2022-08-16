import React, { useState } from 'react';
import PropTypes from "prop-types";
import styles from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => {
    const name = e.target.value;
    setName(name);
  };

  const handleChangeNumber = e => {
    const number = e.target.value;
    setNumber(number);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <div className={styles.contactForm}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <p>Number</p>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <div>
          <button className={styles.button} type="submit">Add contact</button>
        </div>
      </form>
    </div>
  )
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm