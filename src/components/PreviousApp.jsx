// import { Component } from 'react';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { nanoid } from 'nanoid';
// import { Box } from './Box.styled';
// import { save, load } from './storage';

// const STORAGE_KEY = 'contacts';

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     if (load(STORAGE_KEY)) {
//       this.setState({ contacts: load(STORAGE_KEY) });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { contacts } = this.state;
//     if (contacts !== prevState.contacts) {
//       save(STORAGE_KEY, contacts);
//     }
//   }

//   addContact = ({ name, number }) => {
//     const { contacts } = this.state;
//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     contacts.find(contact => contact.name === name)
//       ? alert(name + ' is already in contacts.')
//       : this.setState(({ contacts }) => ({
//           contacts: [newContact, ...contacts],
//         }));
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getFilteredContact = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   render() {
//     const newItem = this.getFilteredContact();
//     return (
//       <Box>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.addContact} />
//         <h2>Contacts</h2>
//         <Filter value={this.state.filter} onChange={this.changeFilter} />
//         <ContactList onDelete={this.deleteContact} list={newItem} />
//       </Box>
//     );
//   }
// }

// export default App;
