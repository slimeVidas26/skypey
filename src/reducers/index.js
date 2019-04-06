
import user from './user'
import messages from './messages'
import contacts from './contacts'
import activeUserId from './activeUserId'
import {combineReducers} from 'redux'

 const allReducer =  combineReducers({
    user:user,
    contacts:contacts,
    activeUserId:activeUserId,
    messages:messages
})



export default allReducer