
import user from './user'
import contacts from './contacts'
import {combineReducers} from 'redux'

 const allReducer =  combineReducers({
    user:user,
    contacts:contacts
})

export default allReducer