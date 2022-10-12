import { useLoaderData } from "react-router-dom";
import AllMCQ from "../AllMCQ/AllMCQ";


const Question = () => {
    const AllQuestion = useLoaderData()
    const Questions = AllQuestion.data;
    const{questions} = Questions

    return (
        <div className='md:ml-52 md:mr-52 mx-10'>
            {
                questions.map(ALLMCQ => <AllMCQ ALLMCQ={ALLMCQ}></AllMCQ>)
            }
        </div>
    );
};

export default Question;