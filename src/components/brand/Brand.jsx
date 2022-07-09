import React from "react";
import "./brand.css";
import Rectangle from "../../assets/RoyalPath.png";
import { BsArrowRight } from "react-icons/bs";
const Brand = () => {
  return (
    <section id="brandSection" className="MainFB">
        
        <div className="FFB">
          <h1 className="h1FB">About</h1>
          <p className="pFB">
            {" "}
            Here at Royal Path Transport, we aim to relieve your scheduling and
            child transportation concerns by providing the best shuttle services
            with safety as our utmost priority. Today, most children have
            jam-packed schedules, leaving their moms and dads wondering how they
            are going to get to all these activities. Our transportation company
            is here to help you fulfill your parental duties by taking the
            transportation of your kids off your shoulders. Contact us today or
            fill out the reservation form to schedule your child's pickup.{" "}
          </p>
        </div>
     
 
    <div className="Fbb">
        <button className="forButtonBrand">
          Get to know us <BsArrowRight className="arrorRightBrand" />
        </button>
      </div>
      <span className="lineForBrand"></span>
      <div className="SFBS">
        <div className="SFB">
          <img src={Rectangle} alt="" />
          <div>
            <h2>Stay up to date</h2>
            <p
              style={{
                color: "white",
                marginTop: "20px",
                marginBottom: "30px",
                marginRight: "20px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "200%",
                width: "608px",
                height: "146px",
                left: "570px",
                top: "4490px",
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet in
              aperiam odio facilis deleniti laboriosam similique voluptatibus
              commodi harum! Reprehenderit, eius pariatur! Dolorum suscipit
              asperiores deleniti explicabo. Voluptatibus eos voluptatum ducimus
              laudantium omnis beatae cum ex? Doloremque totam commodi dolorem
              tempora quo fugit. Alias id laudantium sint minima cum
              consequatur.
            </p>
            <form className="formFB">
              <input
                className="inputFBrand"
                type="text"
                placeholder="email address"
                name="emailAddress"
              />
              <button className="buttonFB">Signup</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
