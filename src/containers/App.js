import React from 'react';
import './App.css';
import Sidebar from '../components/Sidebar'
import store from '../store'
import Main from '../components/Main'
import _ from 'lodash'

const App  = () =>{
    const {contacts} = store.getState().contacts
    
        return (
            <div className="App">
                <Sidebar contacts = {_.values(contacts)}/>
                <Main/>
            </div>
        );
    
}

export default App;
