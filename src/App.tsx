import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar';
import { Outlet } from "react-router-dom";
import { createContext, useState } from 'react';

export const UserContext:any = createContext(0);
// using userContext at app level will help to set logout and login to navbar

function App() {
  
  const userInfo = localStorage.getItem('user') || '';
  const [user, setUser] = useState(userInfo);

  return (
    <>
      <UserContext.Provider value={{user, setUser}}>
      <Navbar />
      <Outlet />
      </UserContext.Provider>
    </>
  );
}

export default App;
