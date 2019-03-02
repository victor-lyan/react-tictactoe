import React from 'react';
import Square from './Square';

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onSquareClick={() => this.props.onClick(i)}
        isWinner = {this.props.winnerLine.indexOf(i) !== -1 ? true : false}
      />
    )
  }

  render() {
    let template = [];
    for (let i = 0; i < 8; i += 3) {
      let children = [];
      for (let k = i; k < i + 3; k++) {
        children.push(this.renderSquare(k));
      }
      template.push(<div className="board-row" key={i}>{children}</div>);
    }
    return (
      <div>{template}</div>
    );
  }
}

export default Board;