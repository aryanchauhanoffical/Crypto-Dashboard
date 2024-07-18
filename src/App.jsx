import React from 'react'
import Dashboard from './pages/Dashboard/Dashboard'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Support from './pages/Support/Support';
import TransactionPage from './pages/Transaction/Transaction';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "/transactions",
    element: <TransactionPage/>,
  },
  {
    path: "/support",
    element: <Support/>,
  },
]);
const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App