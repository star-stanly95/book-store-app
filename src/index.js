
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client'
import App from './App'
import './applicationstyles.css'
import { persistor, store } from './Store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const el = document.getElementById('root')

const root = ReactDOM.createRoot(el)


root.render(


    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>


);



