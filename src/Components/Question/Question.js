import { useLoaderData } from "react-router-dom";
import AllMCQ from "../AllMCQ/AllMCQ";


const Question = () => {
    const AllQuestion = useLoaderData()
    const Questions = AllQuestion.data;
    const{questions} = Questions

    return (
        <div className='ml-52 mr-52'>
            {
                questions.map(ALLMCQ => <AllMCQ ALLMCQ={ALLMCQ}></AllMCQ>)
            }
        </div>
    );
};

export default Question;