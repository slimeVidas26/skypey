import React from 'react'
import store from '../store';
import {setTypingValue} from '../actions'
import './MessageInput.css'
import activeUserId from '../reducers/activeUserId';
import {sendMessage} from '../actions'


const MessageInput = ({value}) =>{
  const state = store.getState()

    const handleChange = (e)=>{
     store.dispatch(setTypingValue(e.target.value))
    }

    const handleClick = e =>{
      e.preventDefault()
      const {typing , activeUserId} = state
      store.dispatch(sendMessage(typing , activeUserId))
    }


  return (
    <form className = "Message" onSubmit = {handleClick}>
      <input type="text"
      className = " Message__input"
       onChange = {handleChange}
       value = {value}
       placeholder = "Write a message"/>
    </form>
  )
}

export default MessageInput
