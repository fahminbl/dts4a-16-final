import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './container/LoginPage.jsx';
import RegisterPage from './container/RegisterPage';
import ProtectedComponent from './components/ProtectedComponent';
import DashBoard from './container/DashBoard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />

        <Route
          path='/'
          element={
            <ProtectedComponent>
              <DashBoard />
            </ProtectedComponent>
          } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
