import React, { useEffect, useState } from 'react'
import './App.css';
// import Home from './component/Home'
function App() {

const [name,setName] = useState ("Ghous")
const [email,setEmail] = useState ("Ghous@gmail.com")

useEffect(()=>{
  console.log("I will run on every Render====>>>")
})

useEffect(()=>{
  console.log("I will run on first render")
},[])

useEffect(()=>{
  console.log("I will run on first render")
},[ name ])

 useEffect(()=>{
   return ()=>{
     console.log("Unmount")
   }
 })


  // const [arr, setArr] = useState(["Car"])
  // // const [name, setName] = useState("Anas");
  // // const [email, setEmail] = useState("Anas24ashrafi@gmail.com")
  // const [obj, setObj] = useState({
  //   name: "Ghous=>>>>",
  //   email: "Ahmed@gmail.com"
  // })


  // const handleClick = () => {
  //    setObj({
  //     name: "Ahmed",
  //     email: "Ahmed@gmail.com.com"
  //   })

  // }
  return (
    <div className="App">
      <h1>React Hooks</h1>
      {/* <h2>{name}</h2> 
       <h3>{email}</h3>
      // <h1>{obj.name}</h1>
      // <h1>{obj.email}</h1>
      // <ul>
      //   {arr.map((v, i) => {
          return <li key={i}>{v}</li>
        })}
      </ul> */}
      {/* <button onClick={handleClick}>Update</button> */}

      <button onClick={()=> setName("Ahmed")}>Update</button>
   

    <h1>{name}</h1>
    <h2>{email}</h2>
<h1>React Hooks</h1>
  {/* <Home name="Ghous Ahmed"  email="ghous@gmail.com" /> */}

    </div>
  );
}

export default App;
