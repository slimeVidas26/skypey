
import user from './user'
import messages from './messages'
import contacts from './contacts'
import activeUserId from './activeUserId'
import typingFunc from "./typing"
import {combineReducers} from 'redux'

 const allReducer =  combineReducers({
    user:user,
    contacts:contacts,
    activeUserId:activeUserId,
    messages:messages,
    typing:typingFunc
    
})



export default allReducer