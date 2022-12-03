
import { FormSubmit, Label, Span, InputContactForm, FormBtn } from "./ContactForm.styled";
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {addContact} from "../../redux/contacts/operations"
import { getContacts } from "../../redux/contacts/selectors";


export const Form = () => {

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [contactName, setContactName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputValue = (e) => {
    switch (e.currentTarget.name) {
      case 'name':
        setContactName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
      if (
      contacts.some(contact => contact.name.toLowerCase() === contactName.toLowerCase())
    ) {
      return alert(contactName + ' is already in contacts!');
    };
    

    
    console.log(contacts);


    const contact = {
      contactName,
      number
    };

     console.log(contact);

    dispatch(addContact(contact));
    
    reset();
    }
    
    const reset = () => {
      setContactName('');
      setNumber('');
    }

        return (
        <FormSubmit onSubmit={handleSubmit}>
         <Label>
          <Span>Name</Span> 
           <InputContactForm
            
            type="text"
            name="name"
            value={contactName}
            onChange={handleInputValue}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
           />
           </Label>

          <Label>
          <Span>Number</Span> 
          <InputContactForm
            type="tel"
            name="number"
            value={number}
            onChange={handleInputValue}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be at least 7 digits and can contain spaces, dashes, parentheses and can start with +"
            required
          /> 
           </Label>
           
           <FormBtn type="submit">add contact</FormBtn>
        </FormSubmit>  

        )

}

export default Form;

// Form.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };