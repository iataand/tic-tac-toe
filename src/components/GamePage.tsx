import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./StartGamePage";

const Cell = styled.div`
  border: 1px solid black;
  width: 6rem;
  height: 6rem;
`;

const Grid = styled.div`
  display: flex;
  max-width: 19rem;
  flex-wrap: wrap;
  min-width: 301px;
`;

const Wrapper = styled.div`
  margin: 6rem auto;
  max-width: 19rem;
`;

const CellText = styled.div`
  font-size: 4rem;
  text-align: center;
  margin: 0;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  width: 18rem;
`;

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function GamePage() {
  let query = useQuery();
  const [grid, setGrid] = useState(["", "", "", "", "", "", "", "", ""]);
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "0">("X");

  const checkWinner = () => {
    if (grid[0] === grid[1] && grid[1] === grid[2] && grid[0] !== "") {
      return grid[0];
    }

    if (grid[3] === grid[4] && grid[4] === grid[5] && grid[3] !== "") {
      return grid[3];
    }

    if (grid[6] === grid[7] && grid[7] === grid[8] && grid[6] !== "") {
      return grid[6];
    }

    if (grid[0] === grid[3] && grid[3] === grid[6] && grid[0] !== "") {
      return grid[0];
    }

    if (grid[1] === grid[4] && grid[4] === grid[7] && grid[1] !== "") {
      return grid[1];
    }

    if (grid[2] === grid[5] && grid[5] === grid[8] && grid[2] !== "") {
      return grid[2];
    }

    if (grid[0] === grid[4] && grid[4] === grid[8] && grid[0] !== "") {
      return grid[0];
    }

    if (grid[2] === grid[4] && grid[4] === grid[6] && grid[2] !== "") {
      return grid[2];
    }

    return false;
  };

  const handleClick = (index: number) => {
    if (grid[index] !== "") {
      return;
    }

    if (checkWinner() !== false) {
      return;
    }

    let newGrid = [...grid];
    newGrid[index] = currentPlayer;
    setGrid(newGrid);
    setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "0" : "X"));
  };

  const handleRestart = () => {
    setGrid(["", "", "", "", "", "", "", "", ""]);
  };

  return (
    <Wrapper>
      <h3>
        Current player:{" "}
        {currentPlayer === "X" ? query.get("player1") : query.get("player2")}
      </h3>
      <Grid>
        {grid.map((_, index) => (
          <Cell key={index} onClick={() => handleClick(index)}>
            <CellText>{grid[index]}</CellText>
          </Cell>
        ))}
      </Grid>

      {checkWinner() && `Winner: ${checkWinner()}`}
      <ButtonsWrapper>
        <Button onClick={handleRestart}>Restart Game</Button>
        <Link to="/">
          <Button>New Game</Button>
        </Link>
      </ButtonsWrapper>
    </Wrapper>
  );
}
