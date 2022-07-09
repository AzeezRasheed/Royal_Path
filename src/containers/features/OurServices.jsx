import React from "react";
import "./ourservices.css";
import CarSeat from "../../assets/CarSeat.png";
import Arc from "../../assets/arc.png";
import AirConditioned from "../../assets/AirConditioned.png";
import AdvancedGps from "../../assets/AdvancedGps.png";
import FireExtinguisher from "../../assets/FireExtinguisher.png";
import Wifi from "../../assets/Wifi.png";
import HighVisibility from "../../assets/HighVisibility.png";
import CarWarning from "../../assets/Car Warning.png";
import WallMountCamera from "../../assets/Wall Mount Camera.png";
import Photo from "../../assets/PhotoForService.png";
import Rectangle from "../../assets/Rectangle 99.png";
import { BsArrowRight } from "react-icons/bs";
import {useNavigate} from "react-router-dom"


const OurServices = () => {
  const navigate = useNavigate();
  return (
    <section className="logistics__features">
      <div className="logistics__features-left">
        <div className="logistics__features-heading">
          <div className="logistics__features-inner">
            
            <h1 className="h1ForService">Our Services</h1>
            <p className="pForService">
              Royal Path Transport LLC offers premium insured ride service for
              your kids through Royal Path Transportation. Staying safe with our
              tracking app to make sure your kids are picked up and dropped of
              on time. Click below to request a quote.{" "}
            </p>
          </div>
          <div className="Attractions">
            <div className="Attraction">
              <img src={CarWarning} alt="CarSeat" />
              <p>3-point safety belts</p>
            </div>
            <div className="Attraction">
              <img src={AirConditioned} alt="AirConditioned" />
              <p>Air Conditioned</p>
            </div>
            <div className="Attraction">
              <img src={AdvancedGps} alt="AdvancedGps" />
              <p>Advanced GPS</p>
            </div>
            <div className="Attraction">
              <img src={FireExtinguisher} alt="FireExtinguisher" />
              <p>Fire Extinguisher</p>
            </div>
            <div className="Attraction">
              <img src={Wifi} alt="Wifi" />
              <p>WiFi equipped</p>
            </div>
            <div className="Attraction">
              <img src={HighVisibility} alt="HighVisibility" />
              <p>High Visibility</p>
            </div>
            <div className="Attraction">
              <img src={CarSeat} alt="CarSeat" />
              <p>Secured Seating Arrangement</p>
            </div>
            <div className="Attraction">
              <img src={WallMountCamera} alt="WallMountCamera" />
              <p>CCTV Cameras</p>
            </div>
          </div>
          <button className="buttonForService" onClick={() => {navigate("/registration")}}>
            <span className="forButtonService">
              Request Form <BsArrowRight className="arrorRightService" />
            </span>
          </button>
        </div>
      </div>
    <div className="logistic__features-right">
    <div className="logistics__features-right">
        <img className="imgForService" src={Photo} alt="Photo" />
        <img className="rectangleForService" src={Rectangle} alt="" />
      </div>
    </div>
    </section>
  );
};

export default OurServices;
