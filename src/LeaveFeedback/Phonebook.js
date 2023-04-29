export const Phonebook = () => {
    return(
        <div>
            <h1>Phonebook</h1>
            <form>
                <label>Name
                    <input type="input" name="name"/>
                </label>
                <br/>
                <label>Number
                    <input type="input" name="number"/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default Phonebook;