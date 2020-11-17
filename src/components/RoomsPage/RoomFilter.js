import React, { useContext,useState} from 'react'
import "./RoomStyle.css"
import { Data, contextAdditional, contextHandle } from "../../Context"

function RoomFilter() {
    const [banner,setBanner] = useState(false)
    const filterDetails = useContext(Data)
    const filterRoom = useContext(contextAdditional)
    const consumerHandle = useContext(contextHandle)
    let { type,
        maxPrice,
        minPrice,
        maxSize,
        minSize,
        breakfast,
        pets,
        price,
        capacity,
        size
    } = filterRoom
    console.log(maxPrice, minPrice, type)
    const unique = (item, value) => {
        let choose = new Set(item.map(item => item[value]))
        return choose
    }
    let Types = unique(filterDetails, 'type')
    Types = ["all", ...Types]
    let people = unique(filterDetails, 'capacity')
    people = [...people]
    return (
        <div className = "filter-box">
            <button style = {{border: "none"}} onClick = {() => setBanner(prev => !prev)} className = "filter-room">Filter Rooms</button>
            <button style = {{border: "none"}} onClick = {() => setBanner(prev => !prev)} className = "filter-room-phn">Filter Rooms</button>
            <form className = {banner ? "show" : "hide"}>
                <div className="type-box">
                <label htmlFor = "capacity">Room Type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        onChange={consumerHandle}
                        style = {{height: "6vh",backgroundColor:"#d1c4e9 ",fontSize:"1.3rem",border:"none"}}
                    >
                        {Types.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <div className="capacity-box">
                    <label htmlFor = "capacity">Guest</label>
                    <select
                        type="number"
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        onChange={consumerHandle}
                        className = "all"
                        style = {{height: "6vh",backgroundColor:"#d1c4e9 ",fontSize:"1.3rem",border:"none"}}
                    >
                        {people ? (
                            people.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))
                        ) : null}
                    </select>
                </div>
                <div className="range-box">
                    <label htmlFor="price">Price <span>&#8377;</span>{price}</label>
                    <input
                        id="price"
                        type="range"
                        name="price"
                        max={maxPrice}
                        min={minPrice}
                        value={price}
                        onChange={consumerHandle}
                    />
                </div>
                <div className = "check-box">
                    <div>
                            <input type="checkbox"
                                className = "filled-in"
                                value = {breakfast}
                                name = "breakfast"
                                onChange = {consumerHandle}
                                style = {{fontSize: "1.5rem"}}
                            /> 
                            <label>Breakfast</label>
                    </div>                                     
                    <div>
                                <input type="checkbox" 
                                className = "filled-in"
                                value = {pets}
                                name = "pets"
                                onChange = {consumerHandle}
                                />
                                <label>Pets</label>
                    </div>
                </div>    
            </form>
        </div>
    )
}

export default RoomFilter
