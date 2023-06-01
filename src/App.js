import React from "react"
import {Routes,Route,Link} from "react-router-dom"
import Homepage from "./components/Homepage"
import Photopage from "./components/Photopage"
import Videopage from "./components/Videopage"
import ImageBtn from "./img/btn.png"
import { useState } from "react"


function App(){
  const[menuActive,setMenuActive]=useState(false)
  return(<div>
      <header>
      <h1>Amiron</h1>
      <p className="oxymi">oxymiron</p>
      <ul>
        <li><a to="/">Home</a></li>
        <li><a href="/">Photo</a></li>
        <li><a href="/">Video</a></li>
      </ul>
    </header>
    <img className="imgbtn" src={ImageBtn} height="60px" width="50px" onClick={()=>setMenuActive(!menuActive)}/>
    <div className={menuActive?'overlay active':"overlay"} onClick={()=>setMenuActive(false)}>
      <div onClick={e=>e.stopPropagation()} className={menuActive?'menu active':"menu"}>
           <div className="menu-content">
               <h1>Menu</h1>
               <hr/>
               <ul>
               <li><a href="/">Home</a></li>
              <li><a href="/photo">Photo</a></li>
              <li><a href="/video">Video</a></li>
               </ul>  
           </div>
      </div>
              <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/photo" element={<Photopage />}/>
                <Route path="/video" element={<Videopage />}/>
              </Routes>
    </div>
  </div>)
}
export default App