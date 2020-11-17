import React, {useContext} from 'react'
import "./Rooms.css"
import MainRooms from "../MainRooms/MainRooms"
import {Featured} from "../../Context"
import Extra from "../Extra/Extra"

function Rooms() {
    const featured = useContext(Featured)
    console.log(featured)
    const {images, price, name, slug,intro,id} = featured
    console.log(price)
    return (
        <div className = "main-wrap">
            <h1>Featured Rooms</h1>
            <hr />
          <div  className = "main">
            {featured.map(item => (
               <div>
                   <MainRooms 
                   images= {item.images} 
                   price = {item.price}
                   name = {item.name}
                   slug = {item.slug}
                   intro = {item.intro}
                   id = {item.id}
                   />
               </div>
            ))}
          </div>
          <Extra />
        </div>
    )
}

export default Rooms
