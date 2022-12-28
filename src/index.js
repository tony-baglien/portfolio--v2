//scss styling
import "./styles/scss/main.scss";
import {
    library,
    dom,
} from "../node_modules/@fortawesome/fontawesome-svg-core";
//icons
import { faGithub } from "../node_modules/@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "../node_modules/@fortawesome/free-brands-svg-icons/faLinkedin";

//modules
import { stickyHeader } from "../src/stickyHeader.js";
import { hoverBarAnimation } from "./hoverBarAnimiation";
export { hoverBarAnimation } from "../src/hoverBarAnimiation.js";
import { scrollReveal } from "./scrollReveal";
import { videoHover } from "./videoHover";
import { modalLogic } from "./modal";

//hot module
if (module.hot) {
    module.hot.accept;
}

stickyHeader();
hoverBarAnimation();
scrollReveal();
videoHover();
modalLogic();

library.add([faGithub, faLinkedin]);
dom.watch();
