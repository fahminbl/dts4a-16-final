import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './container/LoginPage.jsx';
import RegisterPage from './container/RegisterPage';
import ProtectedComponent from './components/ProtectedComponent';
import NewsPage from './container/NewsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={
          <ProtectedComponent>
            <LoginPage />
          </ProtectedComponent>
        } />
        <Route path='/register' element={
          <ProtectedComponent>
            <RegisterPage />
          </ProtectedComponent>
        } />

        <Route
          path="/"
          element={
            <ProtectedComponent>
              <NewsPage />
            </ProtectedComponent>
          }
        />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
