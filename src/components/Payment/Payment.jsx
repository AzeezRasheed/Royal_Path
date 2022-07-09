import React, { useState } from "react";
import './payment.css'
// import logo from "../../assets/logo.png";
import Payrocks from "../../assets/Payrocks.png";

import ForPossibility from "../../containers/possibility/ForPossibility";
import { Footer } from "../../containers";
import Navbar from "../navbar/Navbar";


function Payment() {

 const [data, setData] = useState({
  Surname: "",
  EmailAddress: "",

});

const inputs = [
  {
      name: "surname",
      type: "text",
      placeholder: "name",
      id: 1,
     label:'Surname*'
  },
  {
      name: "emailAddress",
      type: "email",
      placeholder: "email",
      id: 2,
      label: "Email Address*"
  }]

  



  function HandleSubmit(e){
   e.preventDefault()
   
   }
   
   
   function onChange(e){
     setData({...data,[e.target.name]:e.target.value})
     
   }
   
   // function handleForm(e){
   //   console.log(data)
   // }
   
  return (
  <section>
    <div><Navbar/></div>
 <div className="confirmPayment">
  <h2 className="H2ForPayment">CONFIRM PAYMENT</h2>
  <div className="ForH3">
   <p className="H3ForPayment">Customer's Details</p>
  </div>
  <div className="InputFormPayment">
   
  <form  onSubmit={HandleSubmit}>
  {inputs.map((inputs) =>(
                   <ForPossibility className="FirstInputFP" key={inputs.id}  {...inputs}  value={data[inputs.name]} onChange={onChange} />
               ))}
  </form>
 <div className="Dh5FP">
 <h5 className="h5FP">We will send your confirmation to the above email address.
If you would like to receive special offers from us,  please tick the box below. You can read our Privacy Policy here.</h5>
 </div>
  </div>
<div className="TDNFP">
<h3 className="H3TDFP">Total Due Now:</h3>
</div>
<div className="GDFP">
 <h2 className="H2GDFP">Guarantee Details</h2>
</div>
<form className="FormUNFFP">
<div className="DivUNFP">
<img className="imgUFP" src={Payrocks} alt="" />
<div>
<label className="labelFPayment">Card Number*</label>
 <input className="inputForPayment" type="text" placeholder="Email" />
 <label  className="labelFPayment">Name on card*</label>
  <input className="inputForPayment" type="text" placeholder="Email" />
<div >
<label className="labelFPayment">Expiry date*</label>
 <div className="EDFP">
 <input className="inputForEDFP" type="tel" placeholder="MM/YY" />
 <input className="inputForEDFP" type="tel" placeholder="Security code"/>
 </div>
</div>
<label className="labelFPayment">Zip/Postal code*</label>
 <input className="inputForPayment" type="tel" placeholder="Select Month" />
</div>
</div>
<div className="fButtonUFP">
<button className="buttonUFP">Confirm  Booking</button>
</div>
</form>
 </div>
<footer><Footer/></footer>
  </section>
  )
}

export default Payment