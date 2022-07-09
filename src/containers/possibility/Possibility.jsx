import React, { useState } from "react";
import "./possibility.css";
import Group1 from "../../assets/Group 507.png";
import Group2 from "../../assets/Group 514.png";
import Group3 from "../../assets/Group 513.png";
import Type4 from '../../assets/Group 104.png'
import Car from "../../assets/Car.png";
import ForPossibility from "./ForPossibility";
import Type1 from '../../assets/Group 105.png'
import Type2 from '../../assets/Group 106.png'
import Type3 from '../../assets/Group 107.png'
import {useNavigate} from "react-router-dom"



const Possibility = () => {
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

}


  function onChange(e){
    setData({...data,[e.target.name]:e.target.value})
    
  }

  function handleForm(e){
    console.log(data)
    navigate("/payment")
 }

  return (
    <section className="Main">
      <h1 className="h1ForP">3 Easy Steps To Produce Ride</h1>
    <div>
    <div className="GroupsForP">
      <div className="GroupForP">
      <img className="imageForP" src={Group1} alt="" />
        <p  className="pForPossibilities">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          blanditiis.
        </p>
      </div>
      <div>
        <img  className="imageForP" src={Group2} alt="" />
        <p className="pForPossibilities">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          blanditiis.
        </p>
      </div>
      <div>
        <img className="imageForP" src={Group3} alt="" />
        <p className="pForPossibilities">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          blanditiis.
        </p>
      </div>
      </div>
     
    </div>
    <div className="RGBAFP">
    <div className="underneathGroups">
        <img className="carForP" src={Car} alt="" />
        <form className="formForP" onSubmit={HandleSubmit}>
          <h2 className="h2ForP">Registration</h2>
          {inputs.map((inputs) =>(
                   <ForPossibility key={inputs.id}  {...inputs}  value={data[inputs.name]} onChange={onChange} />
               ))}
                <button className="buttonForP" onClick={handleForm}>Proceed</button>
        </form> 
      </div>
      <div className='typeForP'>
            <div className="backgroundFP">
             <div className="columnTypeForP">
             <img className="imgForTP" src={Type1} alt="" />
             <span className="lineFP"></span>
              <p className="pUnderneathFP">Free cancellation reservation</p>
             </div>
            </div>
            <div className="backgroundFP">
             <div className="columnTypeForP">
             <img className="imgForTP" src={Type4} alt="" />
             <span className="lineFP"></span>
              <p className="pUnderneathFP">Bank payment card or cash</p>
             </div>
            </div>
            <div className="backgroundFP">
             <div className="columnTypeForP">
             <img className="imgForTP" src={Type2} alt="" />
             <span className="lineFP"></span>
              <p className="pUnderneathFP">Discounts without intermidiaries</p>
             </div>
            </div>
            <div className="backgroundFP">
             <div className="columnTypeForP">
             <img className="imgForTP" src={Type3} alt="" />
             <span className="lineFP"></span>
              <p className="pUnderneathFP">No extra commisions and risks</p>
             </div>
            </div>
      
      </div>
    </div>
    </section>
  );
};

export default Possibility;
