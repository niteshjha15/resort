import React from 'react'
import RoomList from "./RoomList"
import RoomFilter from "./RoomFilter"
import FrontImg from '../NavBar/FrontImg'
import "./RoomStyle.css"

function RoomCompo() {
    return (
        <div>
            {/* <FrontImg /> */}
            <div className = "our-rooms">
                <h1>Our Rooms</h1>
                <hr className = "red accent-3"/>
            </div>
            <RoomFilter />
            <RoomList />
        </div>
    )
}

export default RoomCompo
