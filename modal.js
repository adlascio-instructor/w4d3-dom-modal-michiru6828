// console.log("here");

// select button element
const openButton = document.querySelector("#openModal");

// add event listener on click to button
openButton.addEventListener("click", () => {
    document.querySelector("#modal").classList.remove("invisible");
});

// remove class invisible from div modal

// add event listener on key press Escape
// add class invisible to div modal

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.querySelector("#modal").classList.add("invisible")
    }
})