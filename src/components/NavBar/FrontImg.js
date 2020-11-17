import React,{useContext} from 'react'
import "./NavBar.css"
import {Link} from "react-router-dom"

function FrontImg() {
    return (
        <div>
           <div className= "resort-img-container">
               <img className = " dark" src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt = "" />
               <div className = "img-text">
                   <h1>Beach Resort</h1>
                   <hr/>
                   <p>Luxury rooms @ 4999</p>
                   <Link to = "allrooms"><button className = "room-btn">Rooms</button></Link>
               </div>
           </div> 
        </div>
    )
}

export default FrontImg
