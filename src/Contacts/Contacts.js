import { useSelector } from "react-redux";
import { nanoid } from 'nanoid'


const Contacts = () => {
    const contacts = useSelector(state => state.contacts);


    return(
        <div>
            <h2>Contacts</h2>
            <ul>
                {contacts.map(({name, number, id}) => {
                    return <li key={id}>
                        <p>{name}</p>
                        <p>{number}</p>
                    </li>
                })}
            </ul>
        </div>
    )
};

export default Contacts