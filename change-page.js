const switchPage = (event) => {
    let newPage = document.getElementById(event.getAttribute("data-target"));
    let display = document.getElementById("display");
    display.innerHTML = "";
    let clone = newPage.content.cloneNode(true);
    display.appendChild(clone);
};
