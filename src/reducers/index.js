
import user from './user'
import contacts from './contacts'
import activeUserId from './activeUserId'
import {combineReducers} from 'redux'

 const allReducer =  combineReducers({
    user:user,
    contacts:contacts,
    activeUserId: activeUserId
})

//console.log(allReducer)

export default allReducer