import React from 'react';
import { useState } from 'react';


export default function Counter(){
    const [count, setCount] = useState(0)
    //const [count, setState] = this.useState(0)
    function increment(){
       setCount(count+1)
       

    }
    function decrement(){
        setCount(count-1)

    }
    return <>
    <button onClick={increment}>+</button>
    <span>{count}</span> 
    <button onClick={decrement}>-</button>
    </>

}