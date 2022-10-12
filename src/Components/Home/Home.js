import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeComponents from '../HomeComponents/HomeComponents';

const Home = () => {
    const languages = useLoaderData();
    return (
        <div>
            <h1 className='md:ml-52 md:mr-52 mt-10 mb-10 text-orange-400 bolder text-3xl'>Welcome to our front-end web developer learning pathway!</h1>
            <h1 className='md:ml-52 md:mr-52 mt-14 mb-14 text-2xl'>Here we provide you with a structured course that will teach you all you need to know to become a front-end web developer.
                 Work through each section, learning new skills (or improving existing ones) as you go along.
                  Each section includes exercises and assessments to test your understanding before you move forward.</h1>
            <div className='md:ml-52 md:mr-52 grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {
                languages.data.map(language => <HomeComponents
                     key={language.id} language={language}
                     ></HomeComponents>)
            }
            </div>
        </div>
    );
};

export default Home;