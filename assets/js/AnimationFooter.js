class AnimationFooter {
    constructor() {
        this.filter = document.getElementById('turbulence-filter');
    }

    animate() {
        gsap.to(this.filter, 30, {
            attr: {
                baseFrequency: 0.03
            },
            yoyo: true,
            repeat: -1
        });
    }
}

export default AnimationFooter;