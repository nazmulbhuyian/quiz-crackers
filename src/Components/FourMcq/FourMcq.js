import React from 'react';
import { Link } from 'react-router-dom';

const FourMcq = (option) => {
    const {correctAnswer} = option;
    // console.log(option, correctAnswer);
    const answer =(option) =>{
        if(option.option === correctAnswer){
            alert ('your ans is correct')
        }
        else{
            alert ('your ans is wrong')
        }
    }
    return (
        <div>
            <Link onClick={() => answer(option)}><h1 className='text-white bg-slate-600 p-4 rounded-lg text-center'>{option.option}</h1></Link>
        </div>
    );
};
export default FourMcq;