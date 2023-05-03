import { useDispatch} from "react-redux";
import { addContact } from "../Redux/ContactsOperations";
import { useState } from "react";
import { nanoid } from "nanoid";

export const Phonebook = () => {
    const [items, setItems] = useState({name: '', phone: ''})
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setItems(prevState => ({...prevState, [name]: value}));
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addContact(items))
        console.log(items)
        setItems({name: '', phone: ''})
        // dispatch(addContact({id: nanoid(), ...items}))
    }

    const {name, phone} = items
    return(
        <div>
            <h1>Phonebook</h1>
            <form>
                <label>Name
                    <input type="input" name="name" onChange={handleChange} value={name}/>
                </label>
                <br/>
                <label>Number
                    <input type="input" name="phone" onChange={handleChange} value={phone}/>
                </label>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
};

export default Phonebook;