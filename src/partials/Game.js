import { SVG_NS, KEYS } from "../settings";
import Board from "./Board";
import Paddle from "./Paddle";
import Ball from "./Ball";
import Score from "./Score";
import Winner from "./Winner";
export default class Game {
  constructor(element, width, height) {
    this.width = width;
    this.height = height;
    
    this.gameElement = document.getElementById(element);
    
    this.paddleWidth = 48;
    this.paddleHeight = 6;
    this.boardGap = 10;
    this.radius = 8;
    this.scorepadding = 30;
    this.maxScore = 3;
    
    this.board = new Board(this.width, this.height);
    this.player1 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.boardGap,
      (this.height - this.paddleHeight) / 2,
      KEYS.a,
      KEYS.z,
      )
      this.player2 = new Paddle(
        this.height,
        this.paddleWidth,
        this.paddleHeight,
        this.width - this.boardGap - this.paddleWidth,
        (this.height - this.paddleHeight) / 2,
        KEYS.up,
        KEYS.down
        )
        this.ball = new Ball(
          this.radius,
          this.width,
          this.height,
          )
          
          this.score1 = new Score(
            this.width / 2 - 50, this.scorepadding, this.scorepadding)
            this.score2 = new Score(
              this.width / 2 + 25, this.scorepadding, this.scorepadding)
              
              this.winner = new Winner(10, this.height / 2, 50);
              
              document.addEventListener('keydown', event => {
                if (event.key === KEYS.spaceBar) {
                  this.pause = !this.pause;
                }
              })
            }
            render() {
              
              if (this.pause) {
                return;
              }
              // empty out game element before rendering
              this.gameElement.innerHTML = "";
              
              let svg = document.createElementNS(SVG_NS, "svg");
              svg.setAttributeNS(null, "width", this.width);
              svg.setAttributeNS(null, "height", this.height);
              svg.setAttributeNS(null, "viewbox", `0 0 ${this.width} ${this.height}`);
              svg.setAttributeNS(null, "version", "1.1");
              this.gameElement.appendChild(svg);
              
              // rendering all game elements inside the SVG
              this.board.render(svg);
              this.player1.render(svg);
              this.player2.render(svg);
              this.ball.render(svg, this.player1, this.player2);
              this.score1.render(svg, this.player1.score);
              this.score2.render(svg, this.player2.score);
          
              // keep track of who won
              if (this.player1.score === this.maxScore) {
                this.winner.render(svg, "Player 1 WON")
                this.pause = !this.pause
                location.reload()
              } else if (this.player2.score === this.maxScore) {
                this.winner.render(svg, "Player 2 WON")
                this.pause = !this.pause
                location.reload()
                
              }
            }
            
          }
          