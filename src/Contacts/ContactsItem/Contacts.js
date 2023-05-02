import { useSelector } from "react-redux";
import ContactsItem from "./ContactsItem";
import * as contactsSelectors from '../../Redux/ContactsSelectors'


const Contacts = () => {
    const contacts = useSelector(contactsSelectors.allContacts);
    return(
        <div>
            <h2>Contacts</h2>
            <ul>
                {contacts && contacts.map(({name, phone, id}) => {
                    return <ContactsItem key={id} id={id} name={name} number={phone}/>
                })}
            </ul>
        </div>
    )
};

export default Contacts