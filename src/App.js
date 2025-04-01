import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

const choice = {
  rock: {
    name: "Rock",
    img: "https://m.media-amazon.com/images/I/61W8BVTF10L.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlnDRE9_gukcUjNcYC52EiuD0IAv_9pk_akQ&s",
  },
  scissors: {
    name: "Scissors",
    img: "https://cdn11.bigcommerce.com/s-n7xn0zsz/images/stencil/1280x1280/products/250/864/340HT__82753.1614619474.jpg?c=2",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" : "lose";
  };

  return (
    <div>
      <div className="main">
        <h1>가위바위보 게임</h1>
        <div className="box-area">
          <Box title="You" item={userSelect} result={result} />
          <Box title="Computer" item={computerSelect} result={result} />
        </div>
      </div>

      <div className="main">
        <button type="button" onClick={() => play("scissors")}>
          <i className="fa-solid fa-hand-scissors"></i>
        </button>
        <button type="button" onClick={() => play("rock")}>
          <i className="fa-solid fa-hand-back-fist"></i>
        </button>
        <button type="button" onClick={() => play("paper")}>
          <i className="fa-solid fa-hand"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
