{
    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".themeName");
        body.classList.toggle("other");
        themeName.innerText = body.classList.contains("other") ? "zielony" : "inny";
    }

    const init = () => {
        const button = document.querySelector(".navigation__link--button");
        button.addEventListener("click", onChangeBackgroundClick);
    }

    init();

};
