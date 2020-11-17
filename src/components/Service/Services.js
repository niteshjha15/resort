import React from 'react'
import {FaCocktail , FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"
import "./Services.css"

function Services() {
    return (
        <div className = "service">
           <h1>Services</h1>
           <hr/>
           <div className = "text-services">
               <div className= "cocktail">
                   <h5><FaCocktail style = {{color: "#00695c", fontSize: "3rem"}}/></h5>
                   <h4>Cocktail</h4>
                   <p>Enjoy unlimited Cocktail in your packege, with no extra charges</p>
               </div>
               <div className= "cocktail">
                   <h5><FaHiking style = {{color: "#00695c", fontSize: "3rem"}}/></h5>
                   <h4>Hiking</h4>
                   <p>Get to know mountains, with our hiking programe, special design for adventure loving persons</p>
               </div>
               <div className= "cocktail">
                   <h5><FaShuttleVan style = {{color: "#00695c", fontSize: "3rem"}}/></h5>
                   <h4>Free Shuttle</h4>
                   <p>Enjoy beautyful site seeing with our free shuttle services specially for you. </p>
               </div>
               <div className= "cocktail">
                   <h5><FaBeer style = {{color: "#00695c", fontSize: "3rem"}}/></h5>
                   <h4>Free Beer</h4>
                   <p>Mind and Body refreshing chilled beer served to your room door at any time you want.</p>
               </div>
            </div> 
        </div>
    )
}

export default Services
