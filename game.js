const add = (function () {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    };
})();

let counterDisplay = document.getElementById("display");
const counter = () => {
    let newCount = add();
    counterDisplay.innerHTML = newCount;
};
