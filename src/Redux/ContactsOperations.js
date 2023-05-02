
import * as contactsApi from '../FetchContcts/FetchContacts'
import * as contactActions from './ContactsActions'




export const fetchContacts = () => async dispatch => {
    dispatch(contactActions.fetchContactsRequest())
    
    try {
        const contacts = await contactsApi.fetchContacts();
        dispatch(contactActions.fetchContactsSuccess(contacts))
    } catch(error) {
        dispatch(contactActions.fetchContactsError(error));
    }
}

