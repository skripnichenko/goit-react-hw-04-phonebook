import React, { Component } from 'react'
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsFromLocalStorage = localStorage.getItem('contacts');

    if (contactsFromLocalStorage) {
      const parsedContacts = JSON.parse(contactsFromLocalStorage);
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const newContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    if (newContacts !== prevContacts) {
      localStorage.setItem("contacts", JSON.stringify(newContacts));
    }
  }
  
  addContact = (name, number) => {
    if (this.state.contacts.filter(contact => contact.name === name).length) {
      alert(`${name} is already in contacts.`);
      return;
    };
    this.setState(prevState => {
      const newContacts = prevState.contacts.slice(0).concat({ id: nanoid(), name, number });
      return ({ contacts: newContacts })
    });
  }

  setFilter = (e) => {
    const filter = e.target.value;
    this.setState({ filter });
  }

  filterContacts = (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.trim().toLowerCase()))
  }

  deleteContact = (e) => {
    const deletedContactId = e.target.value;

    this.setState(prevState => {
      const contacts = prevState.contacts;
      const newArr = contacts.filter(contact => contact.id !== deletedContactId);

      return ({
        contacts: newArr
      })
    })
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.filterContacts(contacts, filter);

    return (
      <div className='App'>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} setFilter={this.setFilter} />
        <ContactList contacts={filteredContacts} deleteContact={this.deleteContact} />
      </div>
    )
  }
}

export default App
