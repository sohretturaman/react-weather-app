
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

import NewFile from './pages/NewFile';


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
        <Link to={'/newfile'} >new file</Link>
       </li>
     </ul>
  </nav>
<div className='App'>
<Routes>
       <Route path='/'   element={<Home/>}/>  
       <Route path='/newfile' element={<NewFile/>}/>
      
       
    </Routes>
</div>
   
    </>
  );
}

export default App;

/**
 *    <Route path='/books/:id' element={<Book/>} /> need to use 
 * /books/:id as a path to render Book component
 */