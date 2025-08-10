import { useContext } from "react";
import { QuizContext } from "../context/quiz";


import quizz from "../img/quiz.svg";

import "./Welcome.css";

const Welcome = () => {

  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={() => dispatch({type: "CHANCE_STAGE"})}>
          Iniciar</button>
        <img src={quizz} alt="Início do Quiz" />
    </div>
  );
};

export default Welcome