let Submit = document.querySelector(".Submit");

Submit.onclick = () => {
    let textarea = document.getElementById("textarea").value
    let msg = new SpeechSynthesisUtterance(textarea);
    msg.volume = 100;
    msg.rate = 0.7;
    speechSynthesis.speak(msg);
};
Submit.disabled = false;