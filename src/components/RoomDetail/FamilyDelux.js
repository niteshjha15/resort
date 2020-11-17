import React,{useContext} from 'react'
import "./FamilyDelux.css"
import {FaCheck,FaHotjar} from "react-icons/fa"
import {MdClear} from "react-icons/md"
import {Link} from "react-router-dom"
import {contextDetailRoom} from "../../Context"

function FamilyDelux() {
    const Detail = useContext(contextDetailRoom)
    const {images,pets,price, size ,extras,name,capacity,type} = Detail
    if(Detail.extras===undefined){
        return (
            <div className="no">
                <h3>No rooms found for your search...</h3>
                <Link to = "/allrooms" className= "waves-effect waves-light btn">Rooms</Link>
            </div>
        )
    }
    return (
        <React.Fragment>
    <div className = "frame">
        <div className = "frame-one">
               <img className = "beach-img" src={images} alt = "" />
               <div className = "img-text">
                   <h1>{name}</h1>
                   <hr/>
                   <p><span>&#8377;</span>{price}</p>
                   <Link to="/"><button className = "home-btn">Home</button></Link>
               </div>
        </div>
        <div className = "frame-two">
            <div>
                <img className="first-img" src = "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt = ""/>
            </div>
            <div>
                <img className="second-img" src = "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt = ""/>
            </div>
            <div>
                <img className="third-img" src = "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt = ""/>
            </div>
        </div>
        <div className = "room-desc">
            <div className="text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    is aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                    officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    is aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                    officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="desc">
                <div><p>Pet Allowed: </p>{pets===true ? <FaCheck style = {{color:"green"}}/>:<MdClear style = {{color:"red",fontSize:"2rem"}}/>}</div>
                <div><p>Breakfast: </p><FaCheck style = {{color:"green"}}/></div>    
                <div><p>Free Beer: </p><FaCheck style = {{color:"green"}}/></div>
                <div><p>Shuttle: </p><FaCheck style = {{color:"green"}}/></div>
                <div><p>Unlimited: </p><MdClear style = {{color:"red",fontSize:"2rem"}}/></div>
            </div>
        </div>
        <div className="extras">
            <h1>Extras:</h1>
            {extras.map(item => (
             <ul>
                 <div><li>#{item}</li></div>
             </ul>
            ))}
        </div>
        <section className="frame-three">
            <div className="info">
                <h2>Info</h2>
                <ul>
                    <li>Type: {type}</li>
                    <li>Capacity: {capacity} person</li>
                    <li>Size: {size} SQFT</li>
                    <li>Price: <span>&#8377;</span>{price}</li>
                </ul>
            </div>
        </section>
        </div>
        </React.Fragment>
    )
}

export default FamilyDelux
