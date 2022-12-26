import "./styles/scss/main.scss";
import {
    library,
    dom,
} from "../node_modules/@fortawesome/fontawesome-svg-core";
import { faGithub } from "../node_modules/@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "../node_modules/@fortawesome/free-brands-svg-icons/faLinkedin";
import anime from "animejs";

if (module.hot) {
    module.hot.accept;
}

//morphing points JSON

let morphingPoints = {
    html: "206.1,113.5 129,33.5 149.9,126 168.6,138.5 206.1,138.5 224.9,126 ",
    scss: "206.1,113.5 168.6,113.5 82,125.5 168.6,138.5 206.1,138.5 224.9,126 ",
    javascript:
        "206.1,113.5 168.6,113.5 149.9,126 129,211.5 206.1,138.5 224.9,126 ",
    react: "206.1,113.5 168.6,113.5 149.9,126 168.6,138.5 237,200.5 224.9,126 ",
    node: "206.1,113.5 168.6,113.5 149.9,126 168.6,138.5 206.1,138.5 295,126.5 ",
    ui: "237,50.5 168.6,113.5 149.9,126 168.6,138.5 206.1,138.5 224.9,126 ",
    normal: "206.1,113.5 168.6,113.5 149.9,126 168.6,138.5 206.1,138.5 224.9,126 ",
    full: "238,50.5 129,34.5 79,125.5 129,217.5 237,200.5 295,125.5 ",
};

library.add([faGithub, faLinkedin]);
dom.watch();

//Sticky Header IIFE
(function stickyHeader() {
    window.onscroll = callBackFunction;

    let header = document.querySelector("header");
    let sticky = header.offsetTop;

    function callBackFunction() {
        if (window.scrollY > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
})();

//mutation Observer
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

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

//opening animatin
anime({
    targets: ".morphing",
    points: [{ value: morphingPoints.full }],
    easing: "easeOutQuad",
    duration: 500,
    delay: 2000,
});

//hover bar animation
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

//video test

let projectVideos = document.querySelectorAll(".project_video");

projectVideos.forEach((video) => {
    video.addEventListener("mouseover", () => {
        setTimeout(() => {
            video.play();
        }, 500);
    });

    video.addEventListener("mouseout", () => {
        video.pause();
        video.currentTime = 0;
    });
});

let modal = document.querySelector(".modal");
let closeBtn = modal.querySelector(".close");

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    console.log(e.target, modal);
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

//project click to bring up modal
let projects = document.querySelectorAll(".project");

projects.forEach((project) => {
    project.addEventListener("click", () => {
        modal.style.display = "block";
        let projectName = project.dataset.projectindex;
        fillModal(projectName);
    });
});

//Modal JSON

const PROJECTJSON = {
    0: {
        title: "Hacker Type",
        description:
            "A 'hacking' simulator, that uses js and css to imitate an analog screen terminal feel. The user can press any button on the keyboard to start 'hacking'",
        link: "https://github.com/tony-baglien/hack-type",
    },
    1: {
        title: "React Food Order",
        description:
            "A front end food ordering interface using React. The user can select items from the menu, adjust items in cart and fill out the ordering information",
        link: "https://github.com/tony-baglien/react-food-order",
    },
};

//fill Modal function
function fillModal(projectName) {
    let modalHeader = document.querySelector(".modal_content--header");
    let modalBody = document.querySelector(".modal_content--body");
    let modalButton = document.querySelector(".modal_content--button");

    //set values
    modalHeader.textContent = PROJECTJSON[projectName].title;
    modalBody.textContent = PROJECTJSON[projectName].description;
    modalButton.href = PROJECTJSON[projectName].link;
}
