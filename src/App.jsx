import { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import './App.css';
import TeaCard from './componentes/TeaCard';


function App() {
  const loadedTea = useLoaderData();
  const [teas,setTeas] = useState(loadedTea);
  return (
    <>
      <h1 className='text-center text-5xl font-bold pt-10'>Tea store available : { teas.length}</h1>
      <nav className='flex justify-center py-5 gap-4 mx-auto w-1/2'>
        <NavLink
          to="/addTea"
          className='link-hover link-primary'
        >Add Tea</NavLink>
        <NavLink
          to="/signIn"
          className='link-hover link-primary'
        >SignIn</NavLink>
        <NavLink
          to="/signUp"
          className='link-hover link-primary'
        >SignUp</NavLink>
        <NavLink
          to="/user"
          className='link-hover link-primary'
        >User</NavLink>
</nav>
      <div className='p-20 grid md:grid-cols-2 gap-10'>
        {
          teas.map(tea => <TeaCard
            key={tea._id}
            tea={tea}
            teas={teas}
            setTeas={setTeas}
          />)
        }
      </div>
      
    </>
  )
}

export default App
