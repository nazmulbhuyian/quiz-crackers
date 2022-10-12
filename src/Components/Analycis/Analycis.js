import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Analycis = () => {
    const AllData = useLoaderData();
    const Datas = AllData.data;
    return (
        <div className='md:ml-72 md:mr-52 mt-24'>
            <h1 className='text-4xl text-bolder m-10 text-teal-600'>Total Question In This Chart.</h1>
            <BarChart width={400} height={200} data={Datas}>
            <Bar dataKey="total" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
             </BarChart>
        </div>
    );
};

export default Analycis;