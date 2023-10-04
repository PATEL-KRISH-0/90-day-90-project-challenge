const Submit = document.querySelector(".Submit");
const Ok = document.querySelector(".Ok");

Submit.addEventListener("click", () => {
    const popup = document.querySelector(".popupback");
    console.log(popup.classList.contains == "active");
    if (popup.classList.contains == "active") {
        popup.classList.remove("active")
        console.log("removeing class");
    }
    else {
        popup.classList.add("active")
        console.log("adding class");
    }

})

Ok.addEventListener("click", () => {
    const popup = document.querySelector(".popupback");
    popup.classList.remove("active")
})