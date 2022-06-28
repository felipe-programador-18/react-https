
import React, {useState, useEffect} from 'react'
import './App.css';

// remind localhost turned api
const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([])
  const [name, setName ] = useState('')
  const [price, setPrice] = useState('')

 // 1-get data to pratice this method!!!
  useEffect(() => {
    const AddingFethcing = async () => {
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)
    }
   AddingFethcing()
  },[])
  console.log('testing here', products)
 

  //2-create function to get all products
  const HandProd =  async (e) => {
   e.preventDefault()
   const product = {
     name,
     price
   }
   console.log(product)

    const res = await fetch(url, {
    method:'POST',
    headers:{
      "Content-Type":'application/json'
    },
    body: JSON.stringify(product),
    }) 
   // const data = await res.json()
    //setProducts(data)
    setName('')
    setPrice('')
  }

  
  return (
    <div className="App">
      <h1>adding more testing and practice more and more always</h1>
        
        <ul> {products.map((product) => 
          (<li key={product.id}>
            {product.name} 
           -R$:{product.price} 
          </li>) )} 
        </ul>


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
