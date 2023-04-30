import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../Redux/ContactsSlice";
import { useState } from "react";

export const Phonebook = () => {
    const [items, setItems] = useState({name: '', number: ''})
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);
   

    const handleChange = (e) => {
        const {name, value} = e.target;
        setItems(prevState => ({...prevState, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setItems(prevState => ({...prevState, [name]: value}))
        dispatch(addContact(items))
    }

    const {name, number} = items
    return(
        <div>
            <h1>Phonebook</h1>
            <form>
                <label>Name
                    <input type="input" name="name" onChange={handleChange} value={name}/>
                </label>
                <br/>
                <label>Number
                    <input type="input" name="number" onChange={handleChange} value={number}/>
                </label>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
};

export default Phonebook;