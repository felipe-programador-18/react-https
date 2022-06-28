
import React, {useState, useEffect} from 'react'
import './App.css';
import { ManageFecthing } from './hoock/custon';

// remind localhost turned api
const url = "http://localhost:3000/products"

function App() {
  //const [products, setProducts] = useState([])
  const [name, setName ] = useState('')
  const [price, setPrice] = useState('')
  
  // now this structure manage hoock personalities!!
  const { data:items ,HttpConfig, loading} = ManageFecthing(url)
 

  //2-create function to get all products and adding httpconfig of hoock personalities
  const HandProd =  async (e) => {
   e.preventDefault()
   const product = {
     name,
     price
   }
   console.log(product)
    HttpConfig(product, "POST")
    setName('')
    setPrice('')
  }

  
  return (
    <div className="App">
      <h1>adding more testing and practice more and more always</h1>
        
         {loading && <p>Loading date ....!</p>}
          
          {!loading && ( <ul>  { items && items.map((product) => 
          (<li key={product.id}>
            {product.name} 
           -R$:{product.price} 
          </li>) )} 
        </ul>)}


      <form onSubmit={HandProd}> 
       <label>
        Your name:
        <input type='text' value={name} name='name' onChange={(e) => setName(e.target.value)} />
       </label>

       <label> Price:
        <input type='text' value={price} name='price' onChange={(e)=>  setPrice(e.target.value)} />
       </label>

         <input type='submit' value='adding itens!' />
       </form>
       
      
    </div>
  );
}

export default App;
