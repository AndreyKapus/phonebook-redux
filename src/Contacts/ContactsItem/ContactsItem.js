// import { deleteContact } from "FetchContcts/FetchContacts";
// import { useDispatch } from "react-redux";


const ContactsItem = ({id, name, phone}) => {
    // const dispatch = useDispatch();

    // const handleDelete = () => {
    //     dispatch(deleteContact(id))
    // }

    return(
        <li id={id}>
            <p>{name}: {phone}</p>
            <button type="button" >delete</button>
        </li>
    )
}

export default ContactsItem;