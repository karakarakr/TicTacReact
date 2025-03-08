import React, { useState } from "react";
import Cell from "./Cell";

function getWinner(board) {
    const combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < combinations.length; i++) {
        const [a, b, c] = combinations[i];
        if (board[a] 
            && board[a] === board[b]
            && board[b] === board[c]
        ) return board[a];
    }
    return null;
}

function Board() {
    const [boardArray, setBoardArray] = useState(Array(9).fill(null));
    const [playerMove, setPlayerMove] = useState('X');
    const [gameOver, setGameOver] = useState(false);

    function changePlayerMove() {
        if (playerMove === 'X') setPlayerMove('O');
        else setPlayerMove('X');
    }

    function setBoardXO(idx) {
        if (boardArray[idx] || gameOver) return;

        const newBoard = boardArray.slice();
        newBoard[idx] = playerMove;

        const winner = getWinner(newBoard);
        setBoardArray(newBoard);

        if (winner) {
            alert(`${winner} has won!`);
            setGameOver(true);
            return;
        }

        if (!newBoard.includes(null)) {
            alert('Draw!');
            setGameOver(true);
            return;
        }

        changePlayerMove();
    }

    function resetGame() {
        setGameOver(false);
        setPlayerMove('X');
        setBoardArray(Array(9).fill(null));
    }

    return (
        <>
        <button className="App-resetBoard" onClick={() => resetGame()}>Reset</button>
        <table className="App-board">
            <tr>
                <Cell 
                    value={boardArray[0] || '.'} 
                    onCellClick={() => setBoardXO(0)}
                />
                <Cell 
                    value={boardArray[1] || '.'} 
                    onCellClick={() => setBoardXO(1)}
                />
                <Cell 
                    value={boardArray[2] || '.'} 
                    onCellClick={() => setBoardXO(2)}
                />
            </tr>
            <tr>
                <Cell 
                    value={boardArray[3] || '.'} 
                    onCellClick={() => setBoardXO(3)}
                />
                <Cell 
                    value={boardArray[4] || '.'} 
                    onCellClick={() => setBoardXO(4)}
                />
                <Cell 
                    value={boardArray[5] || '.'} 
                    onCellClick={() => setBoardXO(5)}
                />
            </tr>
            <tr>
                <Cell 
                    value={boardArray[6] || '.'} 
                    onCellClick={() => setBoardXO(6)}
                />
                <Cell 
                    value={boardArray[7] || '.'} 
                    onCellClick={() => setBoardXO(7)}
                />
                <Cell 
                    value={boardArray[8] || '.'} 
                    onCellClick={() => setBoardXO(8)}
                />
            </tr>
        </table>
        </>
    );
}

export default Board;