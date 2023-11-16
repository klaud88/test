import React, { useEffect, useState } from 'react';


const Test = () => {

const [input, setInput] = useState();
const handle = (e)=> {
    setInput(e.target.value)
}

const [data, setData] = useState({})
const [dataB, setDataB] = useState('')
const [inputed, setInputed] = useState();

async function fetchData  ()  {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${dataB}`)
    const serverData = await response.json();
    setData(serverData)
}

const handleInput =(e)=> {
    setInputed(e.target.value)
}

const search =()=>{
   setDataB(inputed)
}

useEffect(()=>{
    if (dataB <= 10){
        fetchData()
    }
    
},[dataB])




//დამატება მასე უნდა მოხდეს სწორად მიწერია?
const [newData, setNewData] = useState([])
const [btn, setBtn]= useState('none')

useEffect(()=> {
if(newData.length > 3){
    setBtn('flex')
}else{
    setBtn('none')
}
},[newData])

const clear = ()=> {
    setNewData([])
}
const add = ()=> { 
   setNewData( ()=> [...newData, data.title ])
}

return (
<>  
<div>
<input type='text' style={{textTransform: "capitalize"}} onChange={handle}/>
<h2 style={{textTransform: "capitalize"}}>Input (Name, Surname): {input}</h2>
<br/>

</div>
<h1>Data List </h1>
<input type='number' onChange={handleInput}  />
<div>
    <div>
        <ul>
        <li key={data.id}>ID: {data.id}<br/>Title: {data.title}<br/></li>
        </ul>
     </div>
<button style={{margin: 20,}} onClick={search}>Search</button>
<button style={{margin: 20,}} onClick={add}>ADD</button>

{newData.map((value, index)=> <p key={index}>{index} {value}</p>)}
<div style={{display: btn, justifyContent: 'right'}}>
<button onClick={clear}>Clear</button>
</div>
</div>
</>
 )

}
export default Test

