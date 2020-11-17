import React,{useState} from 'react'
import {Link} from "react-router-dom"
import "./Form.css"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import {AiOutlineMail,AiOutlineFieldNumber} from "react-icons/ai"
import {FaHotel} from "react-icons/fa"
import {MdPersonPin} from "react-icons/md"
import {BsCalendar} from "react-icons/bs"

function Form() {
    const [date,setDate] = useState(new Date)
    const [user, setUser] = useState({
        name: "",
        email:"",
        room:"",
        guest: null,
    })

    const handleChange = (event) => {
        console.log(event)
        let target = event.target
        console.log(target)
        let value = target.value
        console.log(value)
        let name = target.name
        console.log(name)
        setUser(prevState => {
            return {...prevState ,[name]:value}
        })
    }
    console.log(user)
    return (
        <div className="form-wrap">
            <h3>Tell us some details so we can make it memorable</h3>
            <form className = "user-form">
                <div className = "email">
                    <MdPersonPin style = {{fontSize: "1.5rem",marginRight:"0.3rem",color:"#BA8541"}} />
                    <input 
                    className = "interface"
                    name="name"
                    type="text" 
                    placeholder="your name please..." 
                    value = {user.name}
                    onChange = {handleChange}
                    />
                </div>
                <div className = "email">
                    <AiOutlineMail style = {{fontSize: "1.5rem",marginRight:"0.3rem",color:"#BA8541"}} />
                    <input
                    className = "interface" 
                    type="email" 
                    placeholder="your email please..." 
                    value = {user.email}
                    onChange = {handleChange}
                    name = "email"
                    />
                </div>
                <div className = "email">
                    <FaHotel style = {{fontSize: "1.5rem",marginRight:"0.3rem",color:"#BA8541"}} />
                    <input 
                    className = "interface"
                    type="text" 
                    placeholder="your preffred room please..." 
                    value = {user.room}
                    onChange = {handleChange}
                    name = "room"
                    />
                </div>
                <div className = "email">
                    <AiOutlineFieldNumber  style = {{fontSize: "1.5rem",marginRight:"0.3rem",color:"#BA8541"}} />
                    <input 
                    className = "interface"
                    type="number" 
                    placeholder="how many of you are coming for holidays..." 
                    value = {user.guest}
                    onChange = {handleChange}
                    name = "guest"
                    />
                </div>
                <div className="date">
                    <label  className = "user-label">Your date of visit: </label> 
                    <div >
                        <BsCalendar className = "picker" style = {{fontSize: "1.5rem",marginRight:"0.3rem",color:"#BA8541"}} />
                        <DatePicker
                        className = "interface" 
                    selected = {date}
                    onChange = {date => setDate(date)}
                    /></div>
                </div>
                <div className="date">
                    <label className = "user-label">When you are leaving us: </label>
                    <div>
                       <BsCalendar className = "picker" style = {{fontSize: "1.5rem",marginRight:"0.3rem",color:"#BA8541"}} />
                        <DatePicker 
                        className = "interface"
                    selected = {date}
                    onChange = {date => setDate(date)}
                    /></div>
                </div>
            </form>
            <Link to = "/"><button className = "user-btn" onClick = {() => alert("your details are submitted. Happy holidays!!")}>Submit</button></Link>
           
        </div>
    )
}

export default Form
