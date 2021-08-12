import React,{useState} from 'react'

function Contact()
{
    const [val,setVal]=useState("Pooja")
    const apple =(e)=> {
        console.warn("function called",e.target.value)
        setVal(e.target.value)
    }
   
  
    return(
        <div>
            <h1>Function component</h1>
            <input type="text" value={val} onChange={apple}/>
            <button onClick={()=>alert(val)} >Clicl me</button>
            
        </div>
    )
}

export default Contact;