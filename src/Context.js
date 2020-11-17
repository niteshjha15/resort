import React,{useState,useEffect} from 'react'
import {Rooms} from "./Data"


export const  Data =  React.createContext()
export const Featured = React.createContext()
export const roomFunction = React.createContext()
export const contextDetailRoom = React.createContext()
export const contextAdditional = React.createContext()
export const contextHandle = React.createContext()
export const contextSortedRooms = React.createContext()





function Context(props) {
    const [rooms, setRooms] = useState(Rooms)
    const [featuredRooms, setFeaturedRooms] = useState([])
    const [detailRoom, setDetailRoom] = useState([])
    const [sortedRooms, setSortedRooms] = useState([])
    const [additional, setAdditional] = useState({
        type:"all",
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false,
    })

    useEffect(() => {
        let tempRooms = [...rooms]
        let Featured = tempRooms.filter(item => item.featured===true)
        let maxPrice = Math.max(...rooms.map(item => item.price))
        let maxSize = Math.max(...rooms.map(item => item.size))
        setAdditional({
            type:"all",
            maxPrice:maxPrice,
            maxSize:maxSize,
            capacity:1,
        price:6000,
        minPrice:0,
        minSize:0,
        breakfast:false,
        pets:false,
        })
        setFeaturedRooms(Featured)
        // setSortedRooms(tempRooms)
    }, [])
    const getItem = (id) => {
        let Data = rooms.find(item => item.id===id)
        return Data
    }

    const handleChange = (event) => {
        let target = event.target;
        let value = target.type==="checkbox" ? target.checked : target.value;
        let name = target.name;
        console.log(`target ${target} name ${name} value ${value}`)
        setAdditional(prevState => {
            return {...prevState, [name]:value}
        })
    }
    useEffect(() => {
        filterRoom()
    }, [additional])

    const filterRoom = () =>{
        let {type,maxPrice,price,minPrice,maxSize,minSize,pets,breakfast,capacity,size} = additional
        price = parseInt(price)
        capacity = parseInt(capacity)
        console.log(`capacity ${capacity} price ${price}`)
        let tempItem = [...rooms]
        //filter by type
        if(type !== "all"){
            tempItem = tempItem.filter(item => item.type===type)
            console.log(tempItem)
        }
        //filter by capacity
        if(capacity !== 1){
            tempItem = tempItem.filter(item => item.capacity >= capacity)
            // console.log(tempItem)
        }
        //filter by price
        tempItem = tempItem.filter(item => item.price <= price)

        // filter by breakfast
        if(breakfast){
            tempItem = tempItem.filter(item => item.breakfast===true)
        }
        // //filter by pets
        if(pets){
            tempItem = tempItem.filter(item => item.pets===true)
        }
        setSortedRooms([...tempItem])
        console.log(sortedRooms)
    }

    const roomid = (id) =>{
        let tempRooms = [...rooms]
        let roomIndex = tempRooms.indexOf(getItem(id))
        let room = tempRooms[roomIndex]
        setDetailRoom(room)
    }


 


    return (
        <Data.Provider value = {Rooms}>
            <Featured.Provider value={featuredRooms}>
               <roomFunction.Provider value={roomid}>
                   <contextDetailRoom.Provider value={detailRoom}>
                      <contextAdditional.Provider value = {additional}>
                          <contextHandle.Provider value = {handleChange}>
                              <contextSortedRooms.Provider value = {sortedRooms}>
                                  
                                     {props.children}
                              </contextSortedRooms.Provider>
                          </contextHandle.Provider>
                      </contextAdditional.Provider>
                   </contextDetailRoom.Provider>
               </roomFunction.Provider>
            </Featured.Provider>
        </Data.Provider>
    )
}

export default Context
