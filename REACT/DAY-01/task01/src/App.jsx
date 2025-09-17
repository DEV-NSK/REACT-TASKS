import React, {useState} from 'react'
import Child from "./Child.jsx"

const App = () => {
    const [showProfile, setShowProfile] = useState(true)
    const userdata = {
        name: "Sai Kiran",
        age : 22,
        city: "Hyderabad",
        image: "https://images.icon-icons.com/1378/PNG/512/avatardefault_92824.png"
    }
    const HandleClick = () => {
        setShowProfile(!showProfile)
    }
  return (
    <div>
      <button onClick={HandleClick} style={{border:"none", backgroundColor:"orangeRed", padding:"10px 30px", color:"white", fontSize:"1rem", margin:"1%"}}>
        {showProfile ? "Hide":"show"}
      </button>
        {showProfile && <Child prop={userdata}/>}
    </div>
  )
}

export default App
