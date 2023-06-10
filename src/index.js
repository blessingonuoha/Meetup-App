import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { FavouriteContextProvider } from './store/favourite-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FavouriteContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </FavouriteContextProvider>
);
