import AnimationCard from "./AnimationCard.js";
import AnimationIcon from "./AnimationIcon.js";
import AnimationFooter from "./AnimationFooter.js";

window.onload = () => {
    const animationCard = new AnimationCard();
    const animationIcon = new AnimationIcon();
    const animationFooter = new AnimationFooter();
    document.addEventListener('scroll', animationCard.scrollCards.bind(animationCard));
    animationIcon.animate();
    animationFooter.animate();
};