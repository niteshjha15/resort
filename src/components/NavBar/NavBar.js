import React, {useState} from 'react'
import {Link, NavLink} from "react-router-dom"
import {FaAlignRight, FaShower} from "react-icons/fa"
import "./NavBar.css"

function NavBar() {
  const [toggle, setToggle] = useState(false)
  const show = () => {
    console.log('changed')
    setToggle(prevState => (
      !prevState
    ))
  }
    return (
      <div className="main">
        <nav>
         <div className="item">
           <div className = "logo"><Link to = "/" className = "beach">Beach Resort</Link></div>
           <ul className = "right">
             <li><NavLink to = "/">Home</NavLink></li>
             <li><Link to = "/allrooms">Rooms</Link></li>
             <li><Link to = "/forms">Book a stay</Link></li>
           </ul>
           <div className= "button">
             <FaAlignRight onClick = {show} style = {{fontSize:"1.5rem",color: "white"}} />
           </div>
         </div>
      </nav>
      {toggle ?
      (<div className="mobile">
         <Link to = "/"><h3 onClick = {show}>Home</h3></Link>
         <Link to = "/allrooms"><h3 onClick = {show}>Rooms</h3></Link>
         <Link to = "/forms"><h3 onClick = {show}>Book a stay</h3></Link>
      </div>) :
      null
      }
      </div>
    )
}

export default NavBar
