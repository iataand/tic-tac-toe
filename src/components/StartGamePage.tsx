import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Button = styled.button`
  padding: 0.5em 2rem;
  max-width: 16em;
  text-decoration: none;
  cursor: pointer;
`;

export default function StartGamePage() {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");

  return (
    <div>
      <Title>Start New Game</Title>
      <Col>
        <div>
          Choose Player 1 name:{" "}
          <input
            value={player1Name}
            onChange={(e) => setPlayer1Name(e.target.value)}
          />
        </div>

        <div>
          Choose Player 2 name:{" "}
          <input
            value={player2Name}
            onChange={(e) => setPlayer2Name(e.target.value)}
          />
        </div>
        <div>
          <Link to={`/new-game?player1=${player1Name}&player2=${player2Name}`}>
            <Button>Start Game</Button>
          </Link>
        </div>
      </Col>
    </div>
  );
}
