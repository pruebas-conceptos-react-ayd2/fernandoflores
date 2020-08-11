import React, {useState} from 'react';
import Square from "./components/Square/Square";
import './App.css';

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function handleClick(i: number) {
        const sqrs = squares.slice();
        if(calculateWinner(sqrs) || sqrs[i]) {
            return;
        }
        sqrs[i] = xIsNext ? 'X' : 'O';
        setSquares(sqrs);
        setXIsNext(!xIsNext);
    }

    function renderSquare(i: number) {
        return <Square onClick={() => handleClick(i)} val={squares[i]}/>
    }

    const winner = calculateWinner(squares);
    let status = '';
    if (winner) {
        status = `Winner ${winner}`
    } else {
        status = `Player's Turn: ${xIsNext ? 'X' : 'O'}`;
    }
    return (
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

function calculateWinner(squares: Array<string>) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Board;
