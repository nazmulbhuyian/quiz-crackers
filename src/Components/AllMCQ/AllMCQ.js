import React from 'react';
import FourMcq from '../FourMcq/FourMcq';

const AllMCQ = ({ALLMCQ}) => {
    //   console.log(ALLMCQ);
    const{question, options, correctAnswer} = ALLMCQ
    return (
        <div className='border-2 border-indigo-600 my-4 p-4 bg-slate-300'>
            <h1 className='text-2xl bolder'>{question}</h1>
            <div className='grid grid-cols-2 gap-4 text-left mt-4'>
                {
                    options.map(option => <FourMcq option={option} correctAnswer={correctAnswer}></FourMcq>)
                }
            </div>
        </div>
    );
};

export default AllMCQ;