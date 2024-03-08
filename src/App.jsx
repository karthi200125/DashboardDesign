import React, { Suspense, useState } from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import Login from './Components/Login';
import PageLoading from './Components/PageLoading';
import SideBar from './Components/SideBar/SideBar';
import Activity from './Pages/Activity/Activity';
import Home from './Pages/Home/Home';
import Posts from './Pages/Posts/Posts';
import Profile from './Pages/Profile/Profile';
import Update from './Pages/Update';
import UserDetails from './Pages/Users/UserDetails';
import Navbar from './Components/Navbar/Navbar';
import MobNav from './Components/MobNav/MobNav';

const App = () => {

  const Layout = ({ children }) => {

    const [sideOpen, setSideOpen] = useState(false)

    return (
      <div className='app '>
        <div className={`sbcon ${sideOpen ? "sbnormal" : 'sbopen'}`}>
          <SideBar onSideOpen={(sideOpen) => setSideOpen(sideOpen)} />
        </div>
        <div className='rightbar'>
          <Navbar />
          <Outlet />
          <div className="mn">
            <MobNav />
          </div>
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
          path: '/users',
          element: <Suspense fallback={<PageLoading />} ><UserDetails /></Suspense>
        },
        {
          path: '/profile',
          element: <Suspense fallback={<PageLoading />} ><Profile /></Suspense>
        },
        {
          path: '/posts',
          element: <Suspense fallback={<PageLoading />} ><Posts /></Suspense>
        },
        {
          path: '/activity',
          element: <Suspense fallback={<PageLoading />} ><Activity /></Suspense>
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
