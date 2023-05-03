import { useSelector } from "react-redux";
import ContactsItem from "./ContactsItem";
import {contactsSelectors} from '../../Redux'


const Contacts = () => {
    const contacts = useSelector(contactsSelectors.allContacts);
    return(
        <div>
            <h2>Contacts</h2>
            <ul>
                {contacts && contacts.map(({name, phone, id}) => {
                    return <ContactsItem key={id} id={id} name={name} phone={phone}/>
                })}
            </ul>
        </div>
    )
};

export default Contacts