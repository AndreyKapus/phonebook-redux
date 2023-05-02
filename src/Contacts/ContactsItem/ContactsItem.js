

const ContactsItem = ({id, name, number}) => {
    return(
        <li id={id}>
            <p>{name}: {number}</p>
            <button type="button">delete</button>
        </li>
    )
}

export default ContactsItem;