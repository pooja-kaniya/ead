import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { useState } from 'react';

function HookCounter(){
    // ........................useState with previous StaticRange.........


    // const initialCount = 0;

    // const [count, setCount]= useState(initialCount)
    // const incrementFive = ()=>{
    //     for(let i=0;i<5;i++){
    //         setCount(prevCount => prevCount+1)
    //     }

    // }

    // return(
    //     <div>
    //         Count: {count}
    //         <button onClick={()=> setCount(initialCount)}>reset</button>
    //         <button onClick={()=> setCount(prevCount => prevCount+1)}>increment</button>
    //         <button onClick={incrementFive}>increment 5</button>
    //     </div>
    // )


        // ..................................useSate with Object............


        const [name, setName]= useState({firstname: '', lastname:''})

        return (
            <form>
                <input type='text'
                value={name.firstname}
                onChange={e=>setName({...name, firstname: e.target.value})}
                />

                <input type='text'
                value={name.lastname}
                onChange={e=>setName({...name, lastname: e.target.value})}
                />
                <h2> your first name is {name.firstname}</h2>
                <h2> your last name is {name.lastname}</h2>

               
            </form>
        )


}
export default HookCounter
