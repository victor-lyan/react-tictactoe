(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(7),i=n.n(s),l=n(8),u=n(1),c=n(2),o=n(4),h=n(3),m=n(5);var p=function(e){var t="square"+(e.isWinner?" square-win":"");return a.a.createElement("button",{className:t,onClick:e.onSquareClick},e.value)},f=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderSquare",value:function(e){var t=this;return a.a.createElement(p,{key:e,value:this.props.squares[e],onSquareClick:function(){return t.props.onClick(e)},isWinner:-1!==this.props.winnerLine.indexOf(e)})}},{key:"render",value:function(){for(var e=[],t=0;t<8;t+=3){for(var n=[],r=t;r<t+3;r++)n.push(this.renderSquare(r));e.push(a.a.createElement("div",{className:"board-row",key:t},n))}return a.a.createElement("div",null,e)}}]),t}(a.a.Component);function v(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(l.a)(t[n],3),a=r[0],s=r[1],i=r[2];if(e[a]&&e[a]===e[s]&&e[a]===e[i])return{winner:e[a],winnerLine:t[n]}}return null}var b=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null),lastStep:null}],xIsNext:!0,stepNumber:0,winnerLine:[],winner:null},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){var t=this,n=this.state.history.slice(0,this.state.stepNumber+1),r=n[n.length-1].squares.slice();if(!this.state.winner&&!r[e]){r[e]=this.state.xIsNext?"X":"O";var a=v(r),s=null===a?[]:a.winnerLine,i=null===a?null:a.winner;this.setState(function(a){return{history:n.concat([{squares:r,lastStep:e}]),xIsNext:!t.state.xIsNext,stepNumber:n.length,winnerLine:s,winner:i}})}}},{key:"jumpTo",value:function(e){var t=v(this.state.history[e].squares),n=null===t?[]:t.winnerLine,r=null===t?null:t.winner;this.setState({stepNumber:e,xIsNext:e%2===0,winnerLine:n,winner:r})}},{key:"render",value:function(){var e,t=this,n=this.state.history,r=n[this.state.stepNumber],s=this.state.winner,i=n.map(function(e,n){var r=n?"Go to move #"+n:"Go to game start";return a.a.createElement("li",{key:n,className:n===t.state.stepNumber?"text-bold":null},a.a.createElement("button",{onClick:function(){return t.jumpTo(n)}},r)," ",a.a.createElement("i",null,function(e){if(null===e)return"";var t,n;switch(Math.floor(e/3)){case 0:n=1;break;case 1:n=2;break;case 2:n=3}switch(e%3){case 0:t=1;break;case 1:t=2;break;case 2:t=3}return"Row: ".concat(n,", Column: ").concat(t)}(e.lastStep)))});return e=s?"Winner: "+s:9===this.state.stepNumber?"It is a draw!":"Next player: "+(this.state.xIsNext?"X":"O"),a.a.createElement("div",{className:"game"},a.a.createElement("div",{className:"game-board"},a.a.createElement(f,{squares:r.squares,onClick:function(e){return t.handleClick(e)},winnerLine:this.state.winnerLine})),a.a.createElement("div",{className:"game-info"},a.a.createElement("div",null,e),a.a.createElement("ol",null,i)))}}]),t}(a.a.Component);n(15);i.a.render(a.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.5ec674d6.chunk.js.map