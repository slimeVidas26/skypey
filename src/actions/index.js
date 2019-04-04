import {SET_ACTIVE_USER_ID} from '../types/action-types'

export default function setActiveUserId(id){
    return{
        type:SET_ACTIVE_USER_ID,
        payload:id
    }
}