import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './App'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
