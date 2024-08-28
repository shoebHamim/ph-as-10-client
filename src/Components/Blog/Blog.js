import React from 'react';

const Blog = () => {
  return (
    <div className='w-1/2 mx-auto my-8'>
      <p className='text-xl'>
        1. what is `cors`?
      </p>
      <p>- cors stands for Cross-Origin Resources Sharing. It is a HTTP-header based
        mechanism that allows a server o indicate any origins (domain,scheme,port) other 
        than it's own and load resources from those origins. </p>
        <br />
      <p className='text-xl'>
        2. Why are you using `firebase`? What other options do you have to implement authentication?
      </p>
      <p>
        - We are using firebase to authenticate our users. Firebase is storing 
        our users credentials and providing authentication service to us. As user authentication is 
        a sensitive and security centered process we are relying on experts like firebase to do that.
        We have other options like auth0, aws amplify,OAuth  to do the same.

      </p>
      <br />
      <p className='text-xl'>
        3. How does the private route work?
      </p>
      <p>
        - Private route allows to render child components conditionally. 
        Private route is a component that takes another component as a child. Based on some
        conditions such as user logged in or not, email verified or not ,private route renders the 
        child component.
      </p>
      <br />

      <p className='text-xl'>
        4. What is Node? How does Node work?
      </p>
      <p>- Node is a javascript runtime environment that runs on the V8 Javascript Engine.
        Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.

      </p>
    </div>
  );
};

export default Blog;