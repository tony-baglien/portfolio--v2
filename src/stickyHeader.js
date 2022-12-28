export const stickyHeader = () => {
    let header = document.querySelector("header");
    let sticky = header.offsetTop;
    window.onscroll = callBackFunction(header, sticky);
};

function callBackFunction(header, sticky) {
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
