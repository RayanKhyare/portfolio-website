import "react";
import "./cards.css";

import { NavLink } from "react-router-dom";

export default function Portfolio(props) {
  return (
    <div className="projectcard">
      <NavLink to={"/portfolio/" + props.path}>
        <img className="projectimg" alt="omegalogo" src={props.img} />
      </NavLink>
      <div className="bottomtext">
        <div className="bottomtoptext">
          <h2 className="projectname">{props.name}</h2>
          <div className="tagcontainer">
            <p className="tag">UI/UX Design</p>
            <p className="tag">Web Developement</p>
          </div>
        </div>
        <p className="shortdescription">{props.shortdescription}</p>
      </div>
    </div>
  );
}
