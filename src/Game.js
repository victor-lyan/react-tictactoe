import React from 'react';
import Board from './Board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        lastStep: null
      }],
      xIsNext: true,
      stepNumber: 0,
      winnerLine: [],
      winner: null
    };
  }
  
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.state.winner || squares[i])
      return;

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    const calculateWinnerResult = calculateWinner(squares);
    const winnerLine = calculateWinnerResult === null ? [] : calculateWinnerResult.winnerLine;
    const winner = calculateWinnerResult === null ? null : calculateWinnerResult.winner;
    this.setState((prevState) => { 
      return {
        history: history.concat([{ squares: squares, lastStep: i }]),
        xIsNext: !this.state.xIsNext,
        stepNumber: history.length,
        winnerLine: winnerLine,
        winner: winner
      }
    });
  }
  
  jumpTo(step) {
    const history = this.state.history;
    const squares = history[step].squares;
    const calculateWinnerResult = calculateWinner(squares);
    const winnerLine = calculateWinnerResult === null ? [] : calculateWinnerResult.winnerLine;
    const winner = calculateWinnerResult === null ? null : calculateWinnerResult.winner;
    
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
      winnerLine: winnerLine,
      winner: winner
    })
  }
  
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.state.winner;
    
    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return (
        <li key={move} className={move === this.state.stepNumber ? 'text-bold' : null}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button> <i>{getColAndRow(step.lastStep)}</i>
        </li>
      )
    });
    
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else if (this.state.stepNumber === 9) {
      status = 'It is a draw!';
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares = {current.squares}
            onClick = {(i) => this.handleClick(i)}
            winnerLine = {this.state.winnerLine}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
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
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {winner: squares[a], winnerLine: lines[i]};
    }
  }
  return null;
}

function getColAndRow(pos) {
  if (pos === null)
    return '';
    
  let col, row;
  switch (Math.floor(pos / 3)) {
    case 0:
      row = 1;
      break;
      
    case 1:
      row = 2;
      break;
      
    case 2:
      row = 3;
      break;
  }
  switch (pos % 3) {
    case 0:
      col = 1;
      break;

    case 1:
      col = 2;
      break;

    case 2:
      col = 3;
      break;
  }
  
  return `Row: ${row}, Column: ${col}`;
}

export default Game;