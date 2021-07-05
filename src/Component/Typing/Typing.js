import React from "react";
import Typewriter from "typewriter-effect";
import Button from "react-bootstrap/Button";
import './typing.css'

export const Typing = () => {
  return (
    <>
      <div className="homeContainer">
        <div className="hometTitle">
          <h3>Hi, I am,</h3>
          <br />
          <h1>Bhargav Valani</h1>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Web Developer", "Freelancer", "Blogger"],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        <div>
        <Button variant="" ><a href="tel:+919327963077" style={{textDecoration:'none', color:'#37474f'}}>Let's Talk</a></Button>
        </div>
        </div>
      </div>
    </>
  );
};
