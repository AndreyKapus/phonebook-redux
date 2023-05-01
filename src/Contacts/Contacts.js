import { useSelector } from "react-redux";
import ContactsItem from "./ContactsItem/ContactsItem";


const Contacts = () => {
    const contacts = useSelector(state => state.contacts);

    return(
        <div>
            <h2>Contacts</h2>
            <ul>
                {contacts.map(({name, number, id}) => {
                    return <ContactsItem key={id} id={id} name={name} number={number}/>
                })}
            </ul>
        </div>
    )
};

export default Contacts