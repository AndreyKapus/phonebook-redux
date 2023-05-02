
import './App.css';
import Contacts from './Contacts/ContactsItem/Contacts';
import Phonebook from './LeaveFeedback/Phonebook';
import * as contactOperations from './Redux/ContactsOperations'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactOperations.fetchContacts())
  }, [dispatch])

  return (
    <div className="App">
        <Phonebook/>
        <Contacts/>
    </div>
  );
}

export default App;
