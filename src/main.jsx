import "./index.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout';
import Home from './components/Home';
import DataPage from './components/DataPage';
import TransactionForm from "./components/Transaction";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='/transaction' element={ <TransactionForm />} />
        <Route path='/data' element={ <DataPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
