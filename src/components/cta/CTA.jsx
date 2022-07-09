import React from 'react'
import './cta.css';
import Mariola from "../../assets/Mariola.png";
import Marysia from "../../assets/Marysia.png";
import Janusz from "../../assets/janusz.png";
import Tariek from "../../assets/Tariek.png";
import Eustauchy from "../../assets/Eustauchy.png";
import CR from "../../assets/cr.png";


const CTA = () => {
  return (
    <section className="MainFCTA">
      <h1 className="h1FCTA">Feedback</h1>
      <p className="pFCTA">OUR CUSTOMERS</p>

     <div  className='gridFCSA'>


      <div className="flexFCS">
       <div className="flexFSCS">
       <p className='pBeneathCSA'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum nostrum iste illum, ea recusandae ducimus nemo dolore, tempore, ipsa repellat culpa doloremque eveniet? Ducimus ad enim odio amet a!</p>
        <h2 className="h2FCSA">Marysia, Kotowice</h2>
       </div>
       <img className="CR" src={CR} alt="" />
      <img className="imgFCTA" src={Mariola} alt="" />
      </div>
      <div className="flexFCS">
       <div className="flexFSCS">
       <p className='pBeneathCSA'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum nostrum iste illum, ea recusandae ducimus nemo dolore, tempore, ipsa repellat culpa doloremque eveniet? Ducimus ad enim odio amet a!</p>
        <h2 className="h2FCSA">Marysia, Kotowice</h2>
       </div>
       <img className="CR" src={CR} alt="" />
      <img className="imgFCTA" src={Mariola} alt="" />
      </div>

      <div className="flexFCS">
       <div className="flexFSCS">
       <p className='pBeneathCSA'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum nostrum iste illum, ea recusandae ducimus nemo dolore, tempore, ipsa repellat culpa doloremque eveniet? Ducimus ad enim odio amet a!</p>
        <h2 className="h2FCSA">Mariola, Kotowice</h2>
       </div>
       <img className="CR" src={CR} alt="" />
      <img className="imgFCTA" src={Marysia} alt="" />
      </div>

      <div className="flexFCS">
       <div className="flexFSCS">
       <p className='pBeneathCSA'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum nostrum iste illum, ea recusandae ducimus nemo dolore, tempore, ipsa repellat culpa doloremque eveniet? Ducimus ad enim odio amet a!</p>
        <h2 className="h2FCSA">Tariek, Tarun</h2>
       </div>
       <img className="CR" src={CR} alt="" />
      <img className="imgFCTA" src={Tariek} alt="" />
      </div>

      <div className="flexFCS">
       <div className="flexFSCS">
       <p className='pBeneathCSA'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum nostrum iste illum, ea recusandae ducimus nemo dolore, tempore, ipsa repellat culpa doloremque eveniet? Ducimus ad enim odio amet a!</p>
        <h2 className="h2FCSA">Eustauchy, Waszwa</h2>
       </div>
       <img className="CR" src={CR} alt="" />
      <img className="imgFCTA" src={Eustauchy} alt="" />
      </div>

      <div className="flexFCS">
       <div className="flexFSCS">
       <p className='pBeneathCSA'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum nostrum iste illum, ea recusandae ducimus nemo dolore, tempore, ipsa repellat culpa doloremque eveniet? Ducimus ad enim odio amet a!</p>
        <h2 className="h2FCSA">Janusz, Warszwa</h2>
       </div>
       <img className="CR" src={CR} alt="" />
      <img className="imgFCTA" src={Mariola} alt="" />
      </div>
      
     </div>
    </section>
  )
}
 
export default CTA
