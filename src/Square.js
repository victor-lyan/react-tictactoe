import React from 'react';

function Square(props) {
  const classes = "square" + (props.isWinner ? ' square-win' : '');
  return (
    <button
      className={classes}
      onClick={props.onSquareClick}
    >
      {props.value}
    </button>
  )
}

export default Square;