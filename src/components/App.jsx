import { useState, useEffect, useMemo } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Box } from './Box.styled';
import { save, load } from './storage';

const STORAGE_KEY = 'contacts';

export const App = () => {
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

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  // const getFilteredContact = () => {
  //   // const { contacts, filter } = this.state;
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  const getFilteredContact = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

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
