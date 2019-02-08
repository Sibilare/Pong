import { SVG_NS, KEYS } from "../settings";
import Board from "./Board";
import Paddle from "./Paddle";
import Ball from "./Ball";

export default class Game {
  constructor(element, width, height) {
    this.width = width;
    this.height = height;

    this.gameElement = document.getElementById(element);

    this.paddleWidth = 8;
    this.paddleHeight = 56;
    this.boardGap = 10;
    this.radius = 8;

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
    document.addEventListener('keydown', event => {
      if (event.key === KEYS.spaceBar) {
        this.pause = !this.pause;
      }
    })
  }

  render() {
    //
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
  }
}
