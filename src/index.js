import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import store from './store';

//ReactDOM.render(<App />, document.getElementById('root'));

const render = ()=>{
    fancyLog();
   return ReactDOM.render(<App />, document.getElementById('root'));  
}

render();
store.subscribe(render)

function fancyLog() {
    console.log("%c store.getState() 👉 👉👇", "background: purple; color: #FFF");
    console.log(store.getState());
  }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
