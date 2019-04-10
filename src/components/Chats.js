import React, { Component } from 'react'
import './Chats.css'


const Chat = ({message})=>{
    const {text , is_user_msg} = message
    return(
        
        <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
        
    )
}

 class Chats extends Component {
   constructor(props) {
     super(props)
     this.chatsRef = React.createRef()
   }

   scrollBottom = ()=>{
     this.chatsRef.current.scrollTop = 
     this.chatsRef.current.scrollHeight;
   }

   componentDidMount(){
     this.scrollBottom()
   }

   componentDidUpdate(){
     this.scrollBottom()
   }
   
  render() {
    return (
      <div className = "Chats"  ref = {this.chatsRef}>
         {this.props.messages.map((message)=>{
            return <Chat message ={message} key = {message.number}/>

          })}
       
      </div>
    )
  }
}

export default Chats
