import './App.css';
import React, { useState } from 'react';
import News from './pages/News';
function App() {

  //create a state to store the selected category

  const[category, setCategory] = useState("general");

  return (

<div style={{ background: "linear-gradient(#ece9e6, #8ec2fdff)" }}>
<h1> News Applications</h1>

<button className='btn btn-hover' onClick={() => setCategory("general")}>General</button>
<button className='btn btn-hover' onClick={()=> setCategory("Technology")}>Technology</button>
<button className='btn btn-hover' onClick={()=> setCategory("Sports")}>Sports</button>
<button className='btn btn-hover' onClick={()=> setCategory("Business")}>Business</button>
<button className='btn btn-hover' onClick={()=> setCategory("Entertainment")}>Entertainment</button>
<button className='btn btn-hover' onClick={()=> setCategory("Health")}>Health</button>
<button className='btn btn-hover' onClick={()=> setCategory("Science")}>Science</button>


{/* pass the category as a prop to News component */}

<News category={category}/>
</div>  
);
}

export default App;
