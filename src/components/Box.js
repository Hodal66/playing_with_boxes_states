import React from "react";
import "./Box.css";
function Box(props) {
  const styles = {
    backgroundColor: props.on ? "#999" : "#2b2b2b",
  };
  const PragraphStyles = {
    backgroundColor: props.on ? "red" : "green",
    color: props.on ? "white" : "blue",
  };
  return (
    <div className="container">
      <div className="card" style={styles} onClick={props.toggle}>
        <p className="p___1" style={PragraphStyles}>
          {props.id}
        </p>
        <p className="">{props.name}</p>
      </div>
    </div>
  );
}

export default Box;
