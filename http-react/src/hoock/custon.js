import  {useState, useEffect} from 'react'



// this is hoock personalities!!
export const ManageFecthing = (url) => {
  const [data, setDate] = useState(null)
  const[setting, setSetting]= useState(null)
  const[method, setMethod] = useState(null)
  const [callfe , setCallset] = useState(false)
  const [loading, setLoading] = useState(false) 

    //create function to adding method headers and another things
    const HttpConfig = (data, method) =>{
     if(method ==='POST'){
        setSetting({
            method,
            headers: {
                "Content-Type":'application/json'
            },
           body: JSON.stringify(data)
        })
        setMethod(method) 
       }
    } 
    
    //function to get date and adding loaded inside functions!!
    useEffect(() => {
       const FetchingData = async () => {
        setLoading(true)
        const res = await fetch(url)
        const json = await res.json()
        
        setDate(json)
        setLoading(false) 
      }
        FetchingData()
    },[url,callfe])


    // 5 refactor post!!!
    useEffect(() => {
     if(method === 'POST'){
        const HttpRequest = async () => {
            if(method === 'POST'){
              let FetOptions = [url,setting]
              const res = await fetch(...FetOptions)
              const json = await res.json()
              setCallset(json)
            }
        }
        HttpRequest()
     }
        
    },[setting, method, url])

  return {data,HttpConfig, loading } 
  

}