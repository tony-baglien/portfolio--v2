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

export const modalLogic = () => {
    let modal = document.querySelector(".modal");

    closingModal(modal);
    clickModal(modal);
};

//closing modal function
function closingModal(modal) {
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
}

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

//click modal function
function clickModal(modal) {
    //project click to bring up modal
    let projects = document.querySelectorAll(".project");
    let x = window.matchMedia("(max-width: 428px)");

    if (!x.matches) {
        projects.forEach((project) => {
            project.addEventListener("click", (e) => {
                modal.style.display = "block";
                let projectName = project.dataset.projectindex;
                fillModal(projectName);
            });
        });
    } else {
        projects.forEach((project) => {
            project.addEventListener("click", (e) => {
                let projectName = project.dataset.projectindex;
                window.location.href = PROJECTJSON[projectName].link;
            });
        });
    }
}
