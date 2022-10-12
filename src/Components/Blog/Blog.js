import React from 'react';

const Blog = () => {
    return (
        <div className='md:ml-52 md:mr-52 mx-10 mt-28 bg-gray-400'>
            <div className='border-2 p-5 border-black mb-5'>
            <h1 className='text-4xl text-white'>What is the purpose of react router</h1>
            <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application.
                <br /> When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div className='border-2 p-5 border-black mb-5'>
                <h1 className='text-4xl text-white'>How does context api work</h1>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around.
                    <br /> This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
                    <br /> Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='border-2 p-5 border-black mb-5'>
                <h1 className='text-4xl text-white'>What is useRef hook?</h1>
                <p>A hook is a special function which enables one use state and other React features without writing ES6 class components which are generally considered difficult to understand, use and master. <br />
                    useRef hook is part of the React Hooks API. It is a function which takes a maximum of one argument and returns an Object. <br /> The returned object has a property called current whose value is the argument passed to useRef. <br />
                    If you invoke it without an argument, the returned object's current property is set to undefined. The code below illustrates how to invoke the useRef hook in functional components.</p>
            </div>
        </div>
    );
};

export default Blog;