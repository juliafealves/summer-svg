import AnimationCard from "./AnimationCard.js";

window.onload = () => {
    const animationCard = new AnimationCard();
    document.addEventListener('scroll', animationCard.calculatePosition);
};