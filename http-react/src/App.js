
import './App.css';
import { useEffect, useState} from "react";

// 4 - custom hook
import { useFetch } from "./hoock/useFetch";

// 8 - errar url para mostrar erro
// "http://localhost:3001/products"
const url = "http://localhost:3000/message";

function App() {
  const [test, setTest] = useState([]);
   
  // 4 - custom hook e 5 - refactor post
  const { data: items, httpConfig, loading, error } = useFetch(url);
   console.log('test data', items)

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - resgatando dados
  // useEffect(async () => {
  //   const res = await fetch("http://localhost:3000/products");

  //   const data = await res.json();

  //   setProducts(data);
  // }, []);

  // 2 - add product
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // const res = await fetch("http://localhost:3000/products", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // const addedProduct = await res.json();

    // 3 - carregamento dinâmico
    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // 5 - refatorar post
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  /* 9 - desafio */
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  const [dog, setDog] = useState([]) 
  

  const AnotherTest =async (test) => {
    try {
      const anotherurl = `https://dog.ceo/api/breeds/list/all`
      const res = await fetch(anotherurl)
      console.log('test all brand here', res)
      return res.json()
      
    } catch (error) {
      console.log("have error here", error)
    }
  }











  const TestFechting = async (breed)=> {
    try {
      //`https://randomuser.me/api/?results=${results}`
      const newurlw = `https://dog.ceo/api/?breed=${breed}/images`
      const res = await fetch(newurlw)
      setDog(res.message)
      console.log("have something here ?", res)
      return await res.json()
    } catch (error) {
      console.log('error in api',error.message)
    }
  }




  useEffect(() => {
    TestFechting() 
  },[]) 
  useEffect(() => {
    
    AnotherTest()   
  },[])

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
   
      {/* 6 - state de loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      <ul>
        {items &&
          items.map((product) => (
            <li key={product.message}>
              {product.poodle} <br/>
              {product.poodle}
              {product.poodle}
              {product.poodle}
              {product.affenpinscher }
              {/* 9 - desafio */}
              <button onClick={() => handleRemove(product.id)}>Excluir</button>
            </li>
          ))}
      </ul>

      <div className="add-product">
        <p>Adicionar produto:</p>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* 7 - state de loading no post */}
          {loading ? <p>Aguarde!</p> : <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}


export default App;
