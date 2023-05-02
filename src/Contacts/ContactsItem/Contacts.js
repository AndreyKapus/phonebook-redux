import { useSelector } from "react-redux";
import ContactsItem from "./ContactsItem";


const Contacts = () => {
    const contacts = useSelector(state => state.contacts.items);

    return(
        <div>
            <h2>Contacts</h2>
            <ul>
                {contacts.lenght > 0 ? contacts.map(({name, number, id}) => {
                    return <ContactsItem key={id} id={id} name={name} number={number}/>
                }) : <div>error</div>}
            </ul>
        </div>
    )
};

export default Contacts