
import user from './user'
import messages from './messages'
import contacts from './contacts'
import activeUserId from './activeUserId'
import typing from "./typing"
import {combineReducers} from 'redux'

 const allReducer =  combineReducers({
    user:user,
    contacts:contacts,
    activeUserId:activeUserId,
    messages:messages,
    typing:typing
})



export default allReducer