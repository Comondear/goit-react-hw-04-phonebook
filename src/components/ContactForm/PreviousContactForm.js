// import { nanoid } from 'nanoid';
// import { Component } from 'react';
// import { Form, Label, Button, Input } from './ContactsForm.styled';

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.resetForm();
//   };

//   resetForm = () => {
//     this.setState({ name: '', number: '' });
//   };

//   InputId = nanoid();
//   TelId = nanoid();

//   render() {
//     const { name, number } = this.state;
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <Label htmlFor={this.InputId}>
//           Name
//           <Input
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             id={this.InputId}
//           />
//         </Label>
//         <Label htmlFor={this.TelId}>
//           Telephone
//           <Input
//             type="tel"
//             name="number"
//             value={number}
//             onChange={this.handleChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             id={this.TelId}
//           />
//         </Label>
//         <Button type="submit" disabled={!name}>
//           Add contact
//         </Button>
//       </Form>
//     );
//   }
// }
