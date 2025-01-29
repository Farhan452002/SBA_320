import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Use 'react-dom/client' for React 18
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import jeopardyReducer from './features/jeopardySlice';
import App from './App';
import './styles.css';

const store = configureStore({
  reducer: {
    jeopardy: jeopardyReducer,
  },
});

// ✅ Correct way to render in React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
