import React, { useState, useRef } from "react";
import {Link} from "react-router-dom";
 

import "./Accordion.css";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className="">
      <Link to="#" className={`text-xs uppercase py-3 font-bold block  ${setActive}`} onClick={toggleAccordion}>
        <i className={`fas fa-home mr-2 text-sm ${setActive?"text-blueGray-300":""}}`}></i>
        <span className="accordion__title">{props.title}</span>
         
      </Link>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      ><div className="bg-red-500 obsolute">
         <ul>
         <li><Link to="/admin/addSchools" className="w-full">Manage About Us</Link></li>
         <li><Link to="/admin/addSchools">Manage Blog</Link></li>
         <li><Link to="/admin/addSchools">Manage Privacy Policy</Link></li>
         <li><Link to="/admin/addSchools">Manage Slider</Link></li>
         </ul>
         </div>
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;
