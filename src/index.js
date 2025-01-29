import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
