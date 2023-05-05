import './App.css';
import Contacts from './Contacts/ContactsItem/Contacts';
import Phonebook from './LeaveFeedback/Phonebook';
// import * as contactOperations from './Redux/ContactsOperations'
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getIsLoading, getError } from 'Redux/ContactsSelectors';


function App() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  // useEffect(() => {
  //   dispatch(contactOperations.fetchContacts())
  // }, [dispatch])

  return (
    <div>
        <Phonebook/>
        {/* {isLoading && !error && <div>is loading</div>} */}
        <Contacts/>
    </div>
  );
}

export default App;
