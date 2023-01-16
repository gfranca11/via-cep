import{FiSearch} from 'react-icons/fi'
import { useState } from 'react';

import './style.css'
import api from './services/api';
function App() {
  const [input , setInpunt] = useState('')
  const[cep ,setCep] = useState ({});
   async function procurar(){
    if (input === '') {
      alert('Preencha um cep valido')
      
    }
    try{
      
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInpunt('')
    }
    catch{
      alert('erro ao buscar')
      setInpunt('')
      
    }
  }
  return (
    <div className="container">
     <h1 className="title">Buscador de Cep</h1>
     <div className="ContainerInput">
      <input type="text" placeholder="Digite o Cep" value={input} onChange={(e)=> setInpunt(e.target.value)}/>
      <button  onClick={procurar} className="Procurar" >
      <FiSearch size={25}/> </button>
     </div>
     {Object.keys(cep).length > 0 &&(
      <main className='main'>
      <h2>Cep:{cep.cep}</h2>
      <span>{cep.logradouro}</span>
      <span>DDD:{cep.ddd}</span>
      <span>{cep.bairro}</span>
      <span>{cep.localidade}-{cep.uf}</span>



     </main>

     )}
     
    </div>
  );
}

export default App;
