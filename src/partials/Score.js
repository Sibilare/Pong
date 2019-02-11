import { SVG_NS } from "../settings";

export default class Score {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }
    
    render(svg, score) {
        let scored = document.createElementNS(SVG_NS, 'text');
        scored.setAttributeNS(null, 'x', this.x)
        scored.setAttributeNS(null, 'y', this.y)
        scored.setAttributeNS(null, 'font-family', 'Silkscreen Web')
        scored.setAttributeNS(null, 'font-size', this.size)
        scored.setAttributeNS(null, 'fill', '#fff')
        scored.textContent = score;
        svg.appendChild(scored);
    }
}