import anime from "animejs";

//this includes animation to fill the bars as well as the reveal on scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            if (entry.target.title === "bar") {
                let x = window.matchMedia("(max-width: 428px)");
                let el = entry.target;
                let elBar = el.querySelector("div");
                let percentage = elBar.dataset.percentage + "%";

                if (x.matches) {
                    elBar.style.width = "100%";
                    anime({
                        targets: elBar,
                        height: percentage,
                        delay: 1000,
                    });
                } else {
                    anime({
                        targets: elBar,
                        width: percentage,
                        delay: 1000,
                    });
                }
            }
        }
    });
});

export const scrollReveal = () => {
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
};
