import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FourMcq = (option) => {
    const {correctAnswer} = option;
    // console.log(option, correctAnswer);
    const answer =(option) =>{
        if(option.option === correctAnswer){
             toast("Wow You Are Right!");
        }
        else{
            toast("Opps Your Answer Is Wrong!");
        }
    }
    return (
        <div>
            <Link onClick={() => answer(option)}><h1 className='text-white bg-slate-600 p-4 rounded-lg text-center'>{option.option}</h1></Link>
            <ToastContainer />
        </div>
    );
};
export default FourMcq;