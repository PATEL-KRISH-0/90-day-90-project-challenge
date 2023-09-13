const like = document.querySelector(".like");
like.addEventListener("click",()=>{
    console.log(like.style.fill=="")
    if(like.style.fill == ""){
        like.style.fill = "red"
    }
    else{
        like.style.fill = ""

    }
})