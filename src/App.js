import { useState } from 'react';
import NavBar from './Component/NavBar';
import NewsBoard from './Component/NewsBoard';
import NewsCard from './Component/NewsCard';

function App(){

  const [category , setCategory] = useState("general");

  return<>
    <NavBar setCategory = {setCategory}/>
    <div className='container text-center'>
    <NewsBoard category = {category}/>
    <NewsCard/>
    </div>
  </>
}

export default App;
