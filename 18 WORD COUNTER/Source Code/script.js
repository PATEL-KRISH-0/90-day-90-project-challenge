const textarea = document.getElementById("textarea");
const CharD = document.querySelector(".Char");
const WordsD = document.querySelector(".Words");


console.log(textarea);
textarea.addEventListener("input", () => {
    let char = textarea.value.length
    let words = textarea.value.trim().split(" ").length

    CharD.innerHTML = `Chars : ${char}`
    WordsD.innerHTML = `Words : ${words}`
})
