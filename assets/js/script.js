import AnimationCard from "./AnimationCard.js";
import AnimationIcon from "./AnimationIcon.js";

window.onload = () => {
    const animationCard = new AnimationCard();
    const animationIcon = new AnimationIcon();
    document.addEventListener('scroll', animationCard.scrollCards.bind(animationCard));
    animationIcon.animate();
};