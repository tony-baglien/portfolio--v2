//hover bar animation
import morphingPoints from "./morphingPoints";
import anime from "animejs";

export function hoverBarAnimation() {
    let bars = document.querySelectorAll(".barGraphWrapper_bar");

    bars.forEach((bar) => {
        bar.addEventListener("mouseover", () => {
            anime({
                targets: ".morphing",
                points: [{ value: morphingPoints[bar.dataset.name] }],
                easing: "easeOutQuad",
                duration: 500,
            });
        });

        bar.addEventListener("mouseleave", () => {
            anime({
                targets: ".morphing",
                points: [{ value: morphingPoints.full }],
                easing: "easeOutQuad",
                duration: 500,
            });
        });
    });

    //opening animatin
    anime({
        targets: ".morphing",
        points: [{ value: morphingPoints.full }],
        easing: "easeOutQuad",
        duration: 500,
        delay: 2000,
    });
}
