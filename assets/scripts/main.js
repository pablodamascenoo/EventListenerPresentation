let button = document.querySelector(".primary")

button.addEventListener("click", ()=>{
    let articles = [...document.querySelectorAll("article")]
    let window = document.querySelector(".black-window")

    for(let i=0; i<articles.length-1; i++){
        if(!articles[i].classList.contains("disabled")){
            if(i===0) button.innerText = "Proximo"
            window.classList.add("animation-window")
            setTimeout(()=>{
                articles[i].classList.toggle("disabled")
                articles[i+1].classList.toggle("disabled")
                window.classList.add("animation-down-class")
                setTimeout(()=>{
                    window.classList.remove("animation-down-class")
                    window.classList.remove("animation-window")
                }, 1000)
            }, 1000)
            break
        }
    }
})