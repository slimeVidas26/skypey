import {SET_TYPING_VALUE} from '../types/action-types'

const initialState = {
    firstName:"John",
    lastName:"doe",
    adress:{
        floor: 4,
        street:"Madison Avenue"
    }
}



export default function typingFunc(state ="" , action){
    switch (action.type) {
        case SET_TYPING_VALUE:
        return action.payload
            
        default:
        return state
    }
   
}