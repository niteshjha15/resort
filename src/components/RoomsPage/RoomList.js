import React,{useContext} from 'react'
import {contextSortedRooms} from "../../Context"
import "./RoomStyle.css"
import IndiRoom from './IndiRoom'
import {FaLaughBeam} from "react-icons/fa"

function RoomList() {
    const mainPage = useContext(contextSortedRooms)
    if(mainPage.length===0){
        return <div style = {{textAlign:"center",height:"60vh",fontSize:"2rem",marginTop:"5rem"}}>No rooms found for your search...<br/>Try refining your search<br />
           <FaLaughBeam style={{color:"blue",fontSize:"3rem"}}/>
        </div>
    }
    return (
        <div className = "feat-wrap">
            <div className="feat">
            {mainPage.map(item => (
                <div>
                <IndiRoom 
                images = {item.images}
                price = {item.price}
                name = {item.name}
                id = {item.id}
                extras = {item.extras}
                />
                </div>
            ))}
            </div>
        </div>
    )
}

export default RoomList
