import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import backgroundImage from "../../../static/hero.png";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat bg-cover`}
      style={{
        backgroundImage:`url(${backgroundImage})`}}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
