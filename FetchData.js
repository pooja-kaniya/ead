import React, { useMemo } from 'react'
import { useEffect,useState } from 'react'
function FetchData() {
 const [data, setData] = useState([])
const [count, setCount] = useState(7)
const [show,setShow] = useState(true)
const [flag, setFlag] = useState(true)
const [keyword, setKeyword] = useState('react')
  const fetchData = async (props) => {
    await fetch(`https://hn.algolia.com/api/v1/search?query=${keyword}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data.hits)
        setData(data.hits)
      })
  }

  useEffect(() => {
    fetchData()
  }, [flag])

  function HandleChange(i){
    setData(data=>[...data.slice(0, i), ...data.slice(i+1)])
    setCount(count=>count-1)
  }

  return (
    <div>
        <input type='text' name='keyword' onChange={(event)=>setKeyword(event.target.value)}/>
        <button onClick={()=>{setFlag(!flag)}}>Search</button>
        <hr/>
      {data.length > 0 && (
        <ul>
          {data.slice(0, count).map((obj, i) => (
            <li key={i}><a href="">{obj.title}</a>
            {` ${obj.author}, ${obj.num_comments}, ${obj.points} `}<button onClick={()=>{HandleChange(i)}} id={i}>Dismis</button></li>
          ))}
        </ul>
      )}
      { show ? <button onClick={()=>
        {count < data.length? setCount(count=>count+2):setShow(false)}
        
        }>More</button>:<h3>No more values</h3>
        }
    </div>
  );

}

export default FetchData