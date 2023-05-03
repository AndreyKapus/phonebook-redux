

const ContactsItem = ({id, name, phone}) => {
    return(
        <li id={id}>
            <p>{name}: {phone}</p>
            <button type="button">delete</button>
        </li>
    )
}

export default ContactsItem;