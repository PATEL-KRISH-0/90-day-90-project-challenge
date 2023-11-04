const emoji = ["😮", "😲", "😴", "🤤", "😪", "😵", "🤐", "🥴", "🤢", "🤮", "🤕", "🥳", "😷", "🤒", "🤕", "🤑", "🤠", "😈", "👿", "👹", "👺", "😿", "😾", "😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "💀", "👻", "👽", "🤖", "💩", "😺", "😸", "😹", "😻", "😼", "🤭", "🤫", "🤥", "😶", "😐", "😑", "😬", "🙄", "😯", "😦", "😧"]

const btn = document.querySelector(".btn");
const output = document.querySelector(".output");

const emojiGe = () => {
    let rendom = emoji[Math.floor(Math.random() * emoji.length)]
    output.innerHTML = rendom  
}

btn.addEventListener("click",emojiGe )
emojiGe()