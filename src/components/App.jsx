import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Box } from './Box.styled';
import { save, load } from './storage';
// import initialContacts from '../initialContacts.json';

const STORAGE_KEY = 'contacts';

export const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts')) ?? initialContacts;
  // });
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setContacts(load(STORAGE_KEY));
  }, [contacts]);

  useEffect(() => {
    setContacts(save(STORAGE_KEY, contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.find(contact => contact.name === name)
      ? alert(name + ' is already in contacts.')
      : setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContact = contacts => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Box>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList onDelete={deleteContact} list={getFilteredContact()} />
    </Box>
  );
};

// useEffect(() => {
//   const contacts = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(contacts);

//   parsedContacts ? setContacts(parsedContacts) : setContacts([]);
// }, []);

// const getFilteredContact = useMemo(() => {
//   return contacts.filter(contact =>
//     contact.toLowerCase().includes(filter.toLowerCase())
//   );
// }, [contacts, filter]);

// const getFilteredContact = useMemo(() => {
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// }, [contacts, filter]);

// const getFilteredContact = useMemo(() => {
//   return contacts.filter(item => {
//     return item.name
//       .toLowerCase()
//       .trim()
//       .includes(filter.toLowerCase().trim());
//   });
// }, [contacts, filter]);
