import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
  const details=useLoaderData()
  return (
    <div className='text-center text-2xl mt-4'>
      <h1>{details.title}</h1>
    </div>
  );
};

export default Checkout;