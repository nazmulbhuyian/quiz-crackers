import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Analycis = () => {
    const AllData = useLoaderData();
    const Datas = AllData.data;
    return (
        <BarChart width={300} height={200} data={Datas}>
        <Bar dataKey="total" fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip></Tooltip>
    </BarChart>
    );
};

export default Analycis;