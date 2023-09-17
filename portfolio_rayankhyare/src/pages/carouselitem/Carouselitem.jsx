import "react";
import "./carouselitem.css";

export default function CarouselItem(props) {
  return (
    <div className="item">
      <img className="itemimg" alt="node" src={props.img}></img>
      <p className="itemname">{props.name}</p>
    </div>
  );
}
