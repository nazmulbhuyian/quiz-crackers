
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Analycis from './Components/Analycis/Analycis';
import Blog from './Components/Blog/Blog';
import Contract from './Components/Contract/Contract';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Question from './Components/Question/Question';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/question/:id',
          loader: ({params}) =>  fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <Question></Question>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/analycis',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Analycis></Analycis>
        },
        {
          path: '/contract',
          element: <Contract></Contract>
        },
        {
          path: '*',
          element: <div className='mt-72 ml-96 text-5xl'>No Data Found</div>
        }
      ]
    },
    
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
