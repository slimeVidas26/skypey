import React from "react";
import store from '../store'
import Header from './Header'

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  console.log({state})
  const activeUser = state.contacts.contacts[activeUserId];
  console.log("%c Rendered with 👉 👉👇",
   "background: red; color: #12345");
  console.log("activeUser" , activeUser);

  return (
    <div className="ChatWindow">
      <Header user = {activeUser} />
      </div>
  );
};

export default ChatWindow;
