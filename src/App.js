import React from 'react';
import './App.css';
import Sidebar from './Sidebar'
import store from './store'
import Main from './Main'
import _ from 'lodash'

const App  = () =>{
    const {contacts} = store.getState()
    
        return (
            <div className="App">
                <Sidebar contacts = {_.values(contacts)}/>
                <Main/>
            </div>
        );
    
}

export default App;
