import React from "react";

const Box = (props) => {
  let result = "";
  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }
  let img = props.item
    ? props.item.img
    : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/1200px-Question_Mark.svg.png";

  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <img className="item-img" src={img} />
      <strong>{result}</strong>
    </div>
  );
};

export default Box;
