import React from "react";
import "./style.css";
// import Counter from "./Counter";

function FriendCard(props) {
  console.log(props)
  return (
    <div className="card">
      <div onClick={props.handleIncrement} className="img-container" data-id={props.key}>       
        <img alt={props.name} src={props.image} />
      </div>
   </div>
  );
}

export default FriendCard;
