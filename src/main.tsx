import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import NavBar from "./components/navBar/Navbar";
import Header from "./components/header/Header";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
      <App/>
      <Header/>
      <NavBar/>
  </React.StrictMode>
);