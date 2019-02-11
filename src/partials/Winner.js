import { SVG_NS } from "../settings";

export default class Winner {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        
    }
    
    render(svg, winner) {
        let champ = document.createElementNS(SVG_NS, 'text');
        champ.setAttributeNS(null, 'x', this.x)
        champ.setAttributeNS(null, 'y', this.y)
        champ.setAttributeNS(null, 'font-family', 'Silkscreen Web')
        champ.setAttributeNS(null, 'font-size', this.size)
        champ.setAttributeNS(null, 'fill', '#fff')
        champ.textContent = winner;
        svg.appendChild(champ);
    }
}
