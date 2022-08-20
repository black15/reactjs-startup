import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import {FavoritesContextProvider} from './store/favorites-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
const routing = (
  <FavoritesContextProvider>
    <Router>
      <App />
    </Router>
  </FavoritesContextProvider>
  )
root.render(routing);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
