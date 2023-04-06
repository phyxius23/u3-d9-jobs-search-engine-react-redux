import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  // provider è un HOC (higher order component), che fornirà ad App le funzionalità dello Store tramite tramite Hooks dedicati
  // riceve come input dalle prop il nostro Store creato con la funzione configureStore()
  <Provider store={store}>
    <App />
  </Provider>
)
