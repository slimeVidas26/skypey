import React from "react";
import store from '../store'
import Header from '../components/Header'
import Chats from '../components/Chats'
import MessageInput from './MessageInput'
import _ from 'lodash'

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  console.log({state})
  const activeUser = state.contacts.contacts[activeUserId];
  console.log("%c Active user 👉 👉👇",
   "background: red; color: #12345");
  console.log("activeUser" , activeUser);

  const activeMessages = state.messages[activeUserId]
  const {typing} = state
  console.log("typing" , {typing})

  return (
    <div className="ChatWindow">
      <Header user = {activeUser} />
      <Chats messages = {_.values(activeMessages)} />
      <MessageInput value = {typing} />

      </div>
  );
};

export default ChatWindow;
