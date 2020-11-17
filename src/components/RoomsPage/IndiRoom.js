import React,{useContext} from 'react'
import "./RoomStyle.css"
import {Link} from "react-router-dom"
import {roomFunction} from "../../Context"
import {contextDetailRoom} from "../../Context"

function IndiRoom({images,name,price,id, extras}) {
    const fun = useContext(roomFunction)
    return (
        <div className= "box">
           <img className="img" src = {images} alt = {name} />
           <h4 className="heading">{name}</h4>
           <h5 className="price"><span>&#8377;</span>{price}</h5>
           <div className="cover"><Link to = "/familydelux"><button onClick = {() => fun(id)} className = "waves-effect waves-light btn">Features</button></Link></div>
           <Link to = "/familydelux"><button onClick = {() => fun(id)} className = "  green accent-2 waves-effect waves-light btn mobile-btn">Features</button></Link>
        </div>
    )
}

export default IndiRoom
