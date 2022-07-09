import React from 'react'
import './footer.css';
import Logo from "../../assets/logo.png";
import Phone from "../../assets/bx_bx-phone.png";
import Map from "../../assets/bx_bx-map.png";
import Gmail from "../../assets/carbon_send-alt.png";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import Instagram from "../../assets/ant-design_instagram-outlined.png";


const Footer = () => {
  return (
    <footer className='MainFFooter' id='footer'>
      <div className='MainsFFooter'>
        <img className='logoFFooter' src={Logo} alt="" />
        <div className='forSupportFooter'>
          <h3>Support</h3>
        <ul>
       <a href="/"> <li className='li1'>Privacy &amp; Policy</li></a>
          <a href="/"><li className='li1'>Terms &amp; Conditions</li></a>
          <a href="/"><li className='li1'>Support System</li></a>
          <a href="/"><li className='li1'>Feedback</li></a>
        </ul>
        </div>
        <div className='forContactFooter'>
          <h3 className='h3ForFooter'>Contact us</h3>
        <ul>
          <div className='CFU'>
          <img src={Phone} alt="" />
         <a href="/"><li className='li2'> +1 &#40;832&#41; 308-8319 </li></a>
          </div>
          <div className='CFU'>
          <img src={Map} alt="" />
          <a href="/"><li className='li2'> 3840 S Diary Ashford road, Houston TX 77083 </li></a>
          </div>
          <div className='CFU'>
          <img src={Gmail} alt="" />
         <a href="/"> <li className='li2'>info@royalpathtransport.com</li></a>
          </div>
         </ul>
        </div>
      </div>
      <footer >
       <div className='footerForFooter'>
     <div className='footersForFooter'>
     <h6 className='pFFooter'>All rights reserved and belong to the trademark Royal Path Transport</h6>
       <div className='anchorFFooter'>
       <a href="/"> <li className='li1'><img src={Facebook} alt="" /></li></a>
       <a href="/"> <li className='li1'><img src={Twitter} alt="" /></li></a>
       <a href="/"> <li className='li1'><img src={Instagram} alt="" /></li></a>
       </div>
     </div>
       </div>

      </footer>
    </footer>
  )
}
 
export default Footer