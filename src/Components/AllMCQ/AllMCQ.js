import React from 'react';
import FourMcq from '../FourMcq/FourMcq';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllMCQ = ({ALLMCQ}) => {
    //   console.log(ALLMCQ);
    const{question, options, correctAnswer} = ALLMCQ

    const eye =() =>{
        
        toast(correctAnswer);
    }

    return (
        <div className='border-2 border-indigo-600 my-4 p-4 bg-slate-300'>

            <div className='flex items-center justify-between'>
            <h1 className='text-2xl bolder'>{question}</h1>
            <EyeIcon onClick={()=>eye()} className="h-6 w-6 text-blue-500"/>
            <ToastContainer></ToastContainer>
            </div>

            <div className='grid grid-cols-2 gap-4 text-left mt-4'>
                {
                    options.map(option => <FourMcq option={option} correctAnswer={correctAnswer}></FourMcq>)
                }
            </div>
        </div>
    );
};

export default AllMCQ;