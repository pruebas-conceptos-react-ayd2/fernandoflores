import React from 'react';
import './App.css';

const Square = ({value}: { value: number }) => (
    <button className="square" onClick={() => alert('click')}>
        {value}
    </button>
);

const Board = () => {
  function renderSquare(i: number){
      return <Square value={i} />
  }
  const status = 'Next Player: X';
  return(
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
  );
}

export default Board;
