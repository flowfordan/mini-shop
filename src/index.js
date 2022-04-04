import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BookstoreServiceProvider } from './components/BookstoreServiceContext/BooksServiceContext';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import './styles/globals.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import BookstoreService from './services/bookstoreService';

import store from './store';
import { Provider } from 'react-redux';


const bookstoreService = new BookstoreService();


const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);


// Initial render: Render an element to the root.
root.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookstoreServiceProvider value={bookstoreService}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BookstoreServiceProvider>
    </ErrorBoundary>
  </Provider>
);

