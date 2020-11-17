import React,{useContext} from 'react'
import "./MainRooms.css"
import {Link} from "react-router-dom"
import {roomFunction} from "../../Context"

function MainRooms(props) {
    const singleRoom = useContext(roomFunction)
    const {price, name, slug, images,intro,id} = props
    return (
              <div className = "feat-box">
                  <Link to = "/familydelux"><img  className  = "featured-imges" onClick = {() => singleRoom(id)} src = {images} alt=""/></Link>
                  <h5><span>&#8377;</span>{price}</h5>
                  <Link to = "/familydelux"><div><button className = "feat-btn" onClick = {() => singleRoom(id)}>Features</button></div></Link>
                  <Link to = "/familydelux"><button className = "feat-btn-phn" onClick = {() => singleRoom(id)} >Features</button></Link>
                  <div className = "feat-cover"></div>
              </div>  
    )
}

export default MainRooms
