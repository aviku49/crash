import React,{useState} from 'react'
function Create()
{

    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [add,setAdd]=useState("");

    function makeUser()
    {
        let data={name,age,add}
        console.warn("called",data)
    }

    return(
        <div>
            <h1>this is form component</h1>
            <input type="text" onChange={(e)=>setName(e.target.value)} name="username" value={name}/>
            <br/><br/>
            <input type="text" onChange={(e)=>setAge(e.target.value)} name="age" value={age}/>
            <br/><br/>
            <input type="text" onChange={(e)=>setAdd(e.target.value)} name="add" value={add}/>
            <br/><br/>
           <button onClick={makeUser}>create user</button>
        </div>
    )
    
}
export default Create;