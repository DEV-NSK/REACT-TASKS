import React from 'react'
import "./Child.css"

const Child = ({prop}) => {
  let data = prop
  return (
    <div style={{display: "flex", justifyContent:"center"}}>
      <div id="child" style={{display: "flex", flexDirection: "column", justifyContent:"center", alignItems: "center", lineHeight: "1rem", boxShadow: "0 0 10px grey", width:"25%", height:"50vh", padding:"20px"}}>
        <img src={data.image} alt="" style={{width: "40%"}}/>
        <h2 style={{fontSize:"2.5rem", color:"orangeRed"}}>{data.name}</h2>
        <h4 style={{marginTop:"10px"}}>{`${data.age} years old`}</h4>
        <span style={{padding:"10px", backgroundColor:"orange", color:"white"}}>{data.city}</span>
      </div>
    </div>
  )
}

export default Child
