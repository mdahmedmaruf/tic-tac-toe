import { useState } from 'react'
import Square from './Square'

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)

    const winner = calculateWinner(squares)
    let status
    if (winner) {
        status = `Winner: ${winner}`
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`
    }

    function handleSquareClick(index) {
        if (squares[index] || calculateWinner(squares)) {
            return
        }
        const newSquares = squares.slice()
        newSquares[index] = xIsNext ? 'X' : 'O'
        setSquares(newSquares)
        setXIsNext(!xIsNext)
    }

    return (
        <>
            <h1 className='text-3xl text-center my-4'>Tic Tac Toe</h1>
            <div className='text-center mb-4'>{status}</div>
            <div className='flex justify-center'>
                <Square
                    value={squares[0]}
                    onSquareClick={() => handleSquareClick(0)}
                />
                <Square
                    value={squares[1]}
                    onSquareClick={() => handleSquareClick(1)}
                />
                <Square
                    value={squares[2]}
                    onSquareClick={() => handleSquareClick(2)}
                />
            </div>
            <div className='flex justify-center'>
                <Square
                    value={squares[3]}
                    onSquareClick={() => handleSquareClick(3)}
                />
                <Square
                    value={squares[4]}
                    onSquareClick={() => handleSquareClick(4)}
                />
                <Square
                    value={squares[5]}
                    onSquareClick={() => handleSquareClick(5)}
                />
            </div>
            <div className='flex justify-center'>
                <Square
                    value={squares[6]}
                    onSquareClick={() => handleSquareClick(6)}
                />
                <Square
                    value={squares[7]}
                    onSquareClick={() => handleSquareClick(7)}
                />
                <Square
                    value={squares[8]}
                    onSquareClick={() => handleSquareClick(8)}
                />
            </div>
        </>
    )
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a]
        }
    }
    return null
}
