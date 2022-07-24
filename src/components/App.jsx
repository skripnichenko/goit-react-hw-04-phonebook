import React, { useState, useEffect } from 'react'
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from "nanoid";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsFromLocalStorage = localStorage.getItem('contacts');

    if (contactsFromLocalStorage) {
      const parsedContacts = JSON.parse(contactsFromLocalStorage);
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    if (contacts.filter(contact => contact.name === name).length) {
      alert(`${name} is already in contacts.`);
      return;
    };
    setContacts(prevContacts => {
      return prevContacts.slice(0).concat({ id: nanoid(), name, number });
    })
  }

  const changeFilterParam = (e) => {
    const filter = e.target.value;
    setFilter(filter);
  }

  const filterContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.trim().toLowerCase()))
  }

  const deleteContact = (e) => {
    const deletedContactId = e.target.value;
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== deletedContactId))
  }

  return (
    <div className='App'>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={changeFilterParam} />
      <ContactList contacts={filterContacts()} deleteContact={deleteContact} />
    </div>
  )
}

export default App;
