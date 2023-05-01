

const ContactsItem = ({id, name, number}) => {
    return(
        <li id={id}>
            {name}: {number}
        </li>
    )
}

export default ContactsItem;