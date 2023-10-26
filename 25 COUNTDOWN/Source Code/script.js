const output = document.querySelector(".output");
const submit = document.querySelector(".Submit");

submit.addEventListener("click", () => {
    output.innerHTML = ""
    const number = document.getElementById("number").value
    let i = number
    output.innerHTML = i
    let set = setInterval(() => {
        i = i - 1;
        output.innerHTML = i
        if (i == 0) {
            clearInterval(set);
            alert("Time is over");
        }

    }, 1000);
})


