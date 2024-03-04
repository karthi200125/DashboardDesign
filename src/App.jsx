import React, { Suspense, useState } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import PageLoading from './Components/PageLoading';
import SideBar from './Components/Sidebar';
import Home from './Pages/Home';
import Setting from './Pages/Setting';
import Profile from './Pages/Profile';
import Data from './Pages/Data';
import Update from './Pages/Update';

const App = () => {

  const Layout = ({ children }) => {

    const [sideOpen, setSideOpen] = useState(false)

    return (
      <div className='container mx-auto w-full overflow-hidden h-screen flex flex-row gap-10 py-5'>
        <div className={`${sideOpen ? "w-[20%]" : 'w-[8%]'} h-full`}>
          <SideBar onSideOpen={(sideOpen) => setSideOpen(sideOpen)} />
        </div>
        <div className='w-full h-full flex flex-col gap-5'>
          <NavBar />
          <Outlet />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout />
      ),
      children: [
        {
          path: '/',
          element: <Suspense fallback={<PageLoading />} ><Home /></Suspense>
        },
        {
          path: '/setting',
          element: <Suspense fallback={<PageLoading />} ><Setting /></Suspense>
        },
        {
          path: '/profile',
          element: <Suspense fallback={<PageLoading />} ><Profile /></Suspense>
        },
        {
          path: '/data',
          element: <Suspense fallback={<PageLoading />} ><Data /></Suspense>
        },
        {
          path: '/update',
          element: <Suspense fallback={<PageLoading />} ><Update /></Suspense>
        },
      ]
    },
    {
      path: 'login',
      element: (
        <Suspense fallback={<PageLoading />}> <Login /></Suspense>
      ),
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
