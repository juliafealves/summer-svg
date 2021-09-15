class AnimationCard {
    constructor() {
    }

    calculatePosition() {
        const position = document.getElementById('container-cards').getBoundingClientRect()['y'];
        console.log(position)
    }
}
export default AnimationCard;