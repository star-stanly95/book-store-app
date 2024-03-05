
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client'
import App from './App'
import './applicationstyles.css'
import { store } from './Store'
import { Provider } from 'react-redux';

const el = document.getElementById('root')

const root = ReactDOM.createRoot(el)


root.render(

  
        <Provider store={store}>
            <App />
        </Provider>
 

);



