import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Components/Blog/Blog';
import Checkout from '../Components/Checkout/Checkout';
import CourseDetail from '../Components/CourseDetail/CourseDetail';
import Courses from '../Components/Courses/Courses';
import Faq from '../Components/Faq/Faq';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';

import Main from '../layout/Main';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/', element: <Main></Main>, children: [
      {path:'/', element:<Home></Home>},
      { path: '/login', element: <Login></Login> },
      { path: '/register', element: <Register></Register> },
      {
        path: '/courses',
        loader: async () => {
          return fetch('https://codecracker-server.vercel.app/courses')
        },
        element: <Courses></Courses>
      }, {
        path: '/course/:id',
        loader: async ({ params }) => {
          return fetch(`https://codecracker-server.vercel.app/course/${params.id}`)
        }, element: <CourseDetail></CourseDetail>
      },{
        path:'/checkout/:id',
        loader: async({params})=>{
          return fetch(`https://codecracker-server.vercel.app/checkout/${params.id}`)
        },
        element:<PrivateRoute>
          <Checkout></Checkout>
        </PrivateRoute>
      },{
        path:'/blog',element:<Blog></Blog>
      },
      {
        path:'/faq',element:<Faq></Faq>
      }


    ]
  }
  , {
    path: '*', element: <div><h1 className='text-center mt-8 text-2xl'>404 Route Not Found!</h1></div>
  }
])