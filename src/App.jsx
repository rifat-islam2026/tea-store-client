import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './App.css';
import TeaCard from './componentes/TeaCard';


function App() {
  const loadedTea = useLoaderData();
  const [teas,setTeas] = useState(loadedTea);
  return (
    <>
      <h1 className='text-center text-5xl font-bold pt-10'>Tea store available : { teas.length}</h1>

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
