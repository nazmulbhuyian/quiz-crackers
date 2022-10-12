
import { Link} from "react-router-dom";


const HomeComponents = ({language}) => {
    const{id,logo, name, total} = language;

    return (
        
            <div>
                <div className='bg-slate-600 p-7'>
                <img src={logo} alt="" className='w-72' />
                <h1 className='text-4xl bold text-white'>{name}</h1>
                <p className='text-white'>{total}</p>
                <Link to = {`/question/${id}`}>
                <button className='bg-red-400 p-3 text-white rounded-lg'>See Question</button>
                </Link>
                </div>
                
            </div>

    );
};

export default HomeComponents;