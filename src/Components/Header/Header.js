import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex items-center ml-52 mr-52 justify-between'>
            <div>
                <h1 className='text-4xl bolder text-cyan-600'>Brain Test</h1>
            </div>
            <div>
            <Link className='mx-4 text-2xl' to='/'>Home</Link>
            <Link className='mx-4 text-2xl' to='/blog'>Blog</Link>
            <Link className='mx-4 text-2xl' to='/analycis'>Analycis</Link>
            <Link className='mx-4 text-2xl' to='/contract'>Contract</Link>
        </div>
        </div>
    );
};

export default Header;