import React, { useState, } from "react";
import ForPossibility from "../../containers/possibility/ForPossibility";
import Alzea from '../../assets/Alzea.png'
import './registration.css'
import {useNavigate} from "react-router-dom"
function Registration() {
 const navigate = useNavigate();
 const [data, setData] = useState({
  NameOfWard: "",
  ParentName: "",
  EmailAdress: "",
  SchoolOfAttendance: "",
  Address: "",
  PhoneNumber: "",
});

const inputs = [
  {
      name: "nameOfWard",
      type: "text",
      placeholder: "Full name*",
      id: 1,
     label:'Name of Ward'
  },
  {
      name: "parentName",
      type: "text",
      placeholder: "Name of wards",
      id: 2,
      label: "Parent's name*"
  }, 
  {
      name: "email",
      type: "email",
      placeholder: "example@gmail.com",
      id: 3,
      label: "Email Adress*"
      
  }, 
  {
      name: "schoolOfAttendance",
      type: "text",
      placeholder: "Name of school",
      id: 4,
      label: "School of Attendance*"

  }, 
  {
      name: "address",
      type: "text",
      placeholder: "Address of ward",
      id: 5,
      label: "Address*"
  },
  {
    name: "phoneNumber",
    type: "tel",
    placeholder: "(999) 000-0000",
    id: 6,
    label: "Phone Number*"
}
]

function HandleSubmit(e){
e.preventDefault()
navigate("/payment")
}


function onChange(e){
  setData({...data,[e.target.name]:e.target.value})
  
}

function handleForm(e){
  console.log(data)
  
}

  return (
   <div className="MainRegs">
     <div className="MainForRegistration">
     <form className="formForRegistration"  onSubmit={HandleSubmit}>
      <h3  className="hForRegistration">Registration</h3>
          {inputs.map((inputs) =>(
                   <ForPossibility key={inputs.id}  {...inputs}  value={data[inputs.name]} onChange={onChange} />
               ))}
               <button className="buttonForRegistration" onClick={handleForm}>Proceed</button>
     </form>
    </div>
    <div className="ForAlzea">
           <img className="Alzea" src={Alzea} alt="" />
    </div>
   </div>
  )
}

export default Registration