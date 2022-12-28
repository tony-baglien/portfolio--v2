export const videoHover = () => {
    let projectVideos = document.querySelectorAll(".project_video video");

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
};
