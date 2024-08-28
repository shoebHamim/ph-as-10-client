import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import Sidebar from '../Sidebar/Sidebar';

const Courses = () => {
  const courses=useLoaderData()
  return (
    <div className='grid grid-cols-1 sm:grid-cols-4 items-center justify-items-center my-8'>
      <div className='mb-8 sm:mb-2'>
          <Sidebar courses={courses}></Sidebar>
      </div>
      <div className='col-span-3 gap-8 grid sm:grid-cols-3 sm:m-8 sm:gap-8 w-4/5'>
      {courses.map(c=>
      <Course course={c} key={c.id}>
      </Course>)}
      </div>
    </div>
  );
};

export default Courses;