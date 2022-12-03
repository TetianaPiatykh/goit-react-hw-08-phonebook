import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { TaskList } from 'components/TaskList/TaskList';
import { ContactList } from 'components/ContactList/ContactList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
import Form from 'components/ContactForm/ContactForm';
// import { fetchTasks } from 'redux/tasks/operations';
import { fetchContacts } from 'redux/contacts/operations';
// import { selectLoading } from 'redux/tasks/selectors';
import { FirstTitle, SecondTitle } from "../components/App.styled";
import { getIsLoading, getError, getContacts } from 'redux/contacts/selectors';

export default function Tasks() {
  const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
      const error = useSelector(getError);
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 28,
        width: '100%',
          color: '#010101'}}>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <FirstTitle>Phonebook</FirstTitle> 
      <Form />
      <SecondTitle>Contacts</SecondTitle> 
      {isLoading && !error && <b>Request in progress...</b>}
      {/* <div>{isLoading && 'Request in progress...'}</div> */}
      {contacts && !isLoading && <ContactList />}
          {/* <ContactList /> */}
    </div>
  );
}