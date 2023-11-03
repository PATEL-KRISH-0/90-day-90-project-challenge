const manu = document.querySelector(".manu");
const svgs = document.querySelector(".svgs");

manu.addEventListener("click", () => {
    document.querySelector(".hide").classList.toggle("active")
    svgs.classList.toggle("roted")
});
