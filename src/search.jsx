import React, { useEffect, useState } from 'react';

const Search = ()=> {
    // async function fetchData() {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    //     const serverData = await response.json();
    //     setData(serverData);
    // }
    
const  dataA = [{
username: "gio",
id: 1,
level: 'junior',
job: 'node.js'
},
{
username: "nia",
id: 2,
level: 'junior',
job: 'react.js'
},
{
username: "noa",
id: 3,
level: 'senior',
job: 'node.js'
}];
    

const [input, setInput] = useState('')
const [data, setData] = useState([])


const result = dataA.filter((dat)=> (
     dat.job.includes(input) ||
     dat.username.includes(input) ||
     dat.level.includes(input)
    )
);
    

useEffect(()=> {
    result
},[input])

const go =()=> {
    setData(result)
}

console.log(result)




    return (
        <>


<input  onChange={(e)=> setInput(e.target.value)} type='search'/>
<button  onClick={go}>Search</button>
<p>Return: {data?.map((e, index)=><li key={index}>{e.username} {e.job}</li>)}</p>
        </>
    )
}

export default Search