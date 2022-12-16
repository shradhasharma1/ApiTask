import React, { useEffect,useState } from 'react';
import './App.css';

function App() {
  const[name,setName]= useState("");
  const[email,setEmail]= useState("");
  const[phone,setPhone]= useState("")
  function saveUser(){
    console.warn({name,email,phone});
    let data = {name,email,phone};
    //api link to be entered
    fetch("http://localhost:4000/api",{
      method :'POST', 
      headers :{
        'Accept' :'application/json',
        'Content' :'application/json'
      },
      body: JSON.stringify(data)
    }).then((result)=>{
          result.json().then((resp)=>{
            console.warn("resp",resp);
          })
    })

  }
  return (
    <div className="App">
      <h1> Post Method Api</h1>
      <label for="name">Name:&nbsp;</label>
      <input type="text" value = {name} onChange={(e)=>{setName(e.target.value)}} name ="name"></input> <br/><br/>
      <label for="email">Email:&nbsp;</label>
      <input type="text" value = {email} onChange={(e)=>{setEmail(e.target.value)}} name ="email"></input> <br/><br/>
      <label for="phone">Phone:&nbsp;</label>
      <input type="text" value = {phone} onChange={(e)=>{setPhone(e.target.value)}} name ="phone"></input> <br/><br/>
      <button type="button" onClick={saveUser}>Save</button>
    </div>
  );
}

export default App;
