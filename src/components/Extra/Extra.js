import React from 'react'
import "./Extra.css"
import {FaMoneyBillAlt,FaWifi,FaBookmark,FaCreativeCommonsNc} from "react-icons/fa"

function Extra() {
    return (
        <div className = "extra-wrap">
            <div className = "book"><h1>Direct book</h1></div>
            <div className = "direct"><FaMoneyBillAlt style = {{fontSize:"3rem",color:"#BA8541"}} /><p>Pay at hotel</p></div>
            <div className = "direct"><FaCreativeCommonsNc style = {{fontSize:"3rem",color:"#BA8541"}} /><p>No hidden charges</p></div>
            <div className = "direct"><FaBookmark style = {{fontSize:"3rem",color:"#BA8541"}} /><p>Exclusive offer</p></div>
            <div className = "direct"><FaWifi style = {{fontSize:"3rem",color:"#BA8541"}} /><p>Free wifi</p></div>
        </div>
    )
}

export default Extra
