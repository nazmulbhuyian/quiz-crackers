import { useLoaderData } from "react-router-dom";
import AllMCQ from "../AllMCQ/AllMCQ";


const Question = () => {
    const AllQuestion = useLoaderData()
    const Questions = AllQuestion.data;
    const{questions} = Questions
    console.log(AllQuestion.data.name);

    return (
        <div className='md:ml-52 md:mr-52 mx-10'>
            <h1 className="text-4xl mt-10 mb-10 text-lime-500">{AllQuestion.data.name} Related Question is here</h1>
            {
                questions.map(ALLMCQ => <AllMCQ ALLMCQ={ALLMCQ}></AllMCQ>)
            }
        </div>
    );
};

export default Question;