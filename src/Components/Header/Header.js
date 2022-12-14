import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex items-center md:ml-52 md:mr-52 justify-between'>
            <div>
                <h1 className='text-4xl bolder text-cyan-600'>Brain Test</h1>
            </div>
            <div>
            <Link className='mx-3 text-2xl' to='/'>Home</Link>
            <Link className='mx-3 text-2xl' to='/blog'>Blog</Link>
            <Link className='mx-3 text-2xl' to='/analycis'>Analycis</Link>
        </div>
        </div>
    );
};

export default Header;