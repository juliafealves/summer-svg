class AnimationCard {
    constructor() {
        this.container = document.getElementById('container-cards');
        this.cardLeft = document.getElementById('card-left');
        this.cardRight = document.getElementById('card-right');
    }

    scrollCards() {
        window.requestAnimationFrame(this._calculatePosition.bind(this))
    }

    _calculatePosition() {
        const position = this.container.getBoundingClientRect()['y'];

        if(position >= 25) {
            this.cardLeft.style.transform = `translate(${(-position + 25)/10}%)`;
            this.cardRight.style.transform = `translate(${(position - 25)/10}%)`;
        }
    }
}
export default AnimationCard;