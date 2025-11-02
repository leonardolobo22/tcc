import React, { useState, useEffect, useCallback } from "react";
import "./QuizPage.css";

function QuizPage() {
  return (
    <div className="quiz-page">
      <div className="decor">🌳🦜🍃</div>
      <h1>Hora do Quiz da Floresta!</h1>
      <p>
        Vamos revisar o que aprendemos sobre as trilhas e árvores da Mata Atlântica.
        Clique no botão abaixo e teste seus conhecimentos!
      </p>
      <a
        href="https://kahoot.it/challenge/001161566"
        target="_blank"
        rel="noopener noreferrer"
        className="quiz-button"
      >
        Ir para o Quiz
      </a>
      <div className="decor">🌿🌞🐒</div>
    </div>
  );
}

export default QuizPage;
