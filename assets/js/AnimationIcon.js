class AnimationIcon {
    constructor() {
        this.icons = document.querySelectorAll('.icon');
    }

    animate() {
        gsap.to(this.icons, 0.5, {
            scale: 0.95,
            yoyo: true,
            repeat: -1
        });
    }
}

export default AnimationIcon;