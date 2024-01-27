
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

import Details from './pages/Details';


//export const API ='57adf1a8c2c34be34a149e59c4461094'; 
function App() {
/* 
  useEffect(()=>{
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=57adf1a8c2c34be34a149e59c4461094`)
    .then((res)=>res.json())
    .then((data)=>console.log(data[0].lat,data[0].lon)
    )
  },[]) */
  return (
    <> 
  <nav>
     <ul>
       <li>
         <Link to={'/'} >Home</Link>
        

       </li>
       <li>
        <Link to={'/details'} >details</Link>
       </li>
     </ul>
  </nav>

    <Routes>
       <Route path='/'   element={<Home/>}/>  
       <Route path='/details' element={<Details/>}/>
      
       
    </Routes>
    </>
  );
}

export default App;

/**
 *    <Route path='/books/:id' element={<Book/>} /> need to use 
 * /books/:id as a path to render Book component
 */