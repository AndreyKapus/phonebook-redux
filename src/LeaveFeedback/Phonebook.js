import { useDispatch} from "react-redux";
// import { addContact } from "../Redux/ContactsOperations";
import { useState } from "react";
import { useGetPokemonByNameQuery } from "Redux/CreateApi";

export const Phonebook = () => {
    // const [items, setItems] = useState({name: '', phone: ''})
    // const dispatch = useDispatch();

    // const handleChange = (e) => {
    //     const {name, value} = e.target;
    //     setItems(prevState => ({...prevState, [name]: value}));
        
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
        
    //     // dispatch(addContact(items))
    //     setItems({name: '', phone: ''})
    // };
    
    const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

    return(
        <div>
            <h1>Phonebook</h1>
            <form>
                <label>Name
                    <input type="input" name="name"  />
                </label>
                <br/>
                <label>Number
                    <input type="input" name="phone" />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default Phonebook;