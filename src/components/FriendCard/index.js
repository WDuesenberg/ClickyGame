import React from "react";
import "./style.css";
// import Counter from "./Counter";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
        {/* <p className="card-text">Click Count: {props.count}</p>
          <span className="btn btn-primary" onClick={props.handleIncrement}>
            Increment
          </span>{" "}
          <span className="btn btn-danger" onClick={props.handleDecrement}>
            Decrement
          </span> */}
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default FriendCard;
