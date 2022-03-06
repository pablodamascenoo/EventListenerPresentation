let primaryButton = document.querySelector(".primary")

primaryButton.addEventListener("click", ()=>{
    let articles = [...document.querySelectorAll("article")]
    let window = document.querySelector(".black-window")

    for(let i=0; i<articles.length-1; i++){
        if(!articles[i].classList.contains("disabled")){
            window.classList.add("animation-window")
            setTimeout(()=>{
                if(i===0) primaryButton.innerText = "Proximo"
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

let captureDiv = document.querySelector(".capture")
let innerCaptureDiv = captureDiv.querySelector("div")
let bubblingDiv = document.querySelector(".bubbling")
let innerBubblingDiv = bubblingDiv.querySelector("div")
let buttonEventExample = document.querySelectorAll(".double-list")[1].firstElementChild
let buttonOnClickExample = document.querySelectorAll(".double-list")[1].lastElementChild


captureDiv.addEventListener("click", async function(){
    innerCaptureDiv.querySelector("p").innerHTML = "1º Elemento pai<br>"
    innerCaptureDiv.querySelector("p").classList.add("fade")
}, true)

innerCaptureDiv.addEventListener("click", ()=>{
    innerCaptureDiv.querySelector("p").innerHTML += "2º Elemento filho"
}, true)

bubblingDiv.addEventListener("click", async function(){
    innerBubblingDiv.querySelector("p").innerHTML += "2º Elemento pai"
}, false)

innerBubblingDiv.addEventListener("click", ()=>{
    innerBubblingDiv.querySelector("p").innerHTML = "1º Elemento filho<br>"
    innerBubblingDiv.querySelector("p").classList.add("fade")
}, false)

buttonEventExample.addEventListener("click", ()=>{
    let divEvent = buttonEventExample.parentNode.parentNode
    .lastElementChild.firstElementChild

    divEvent.classList.add("fade")
    divEvent.innerHTML = "<p>Primeiro evento</p>"
})

buttonEventExample.addEventListener("click", ()=>{
    let divEvent = buttonEventExample.parentNode.parentNode
    .lastElementChild.firstElementChild

    divEvent.innerHTML += "<p>Segundo evento</p>"
})

buttonOnClickExample.onclick = ()=>{
    let divOnClick = buttonOnClickExample.parentNode.parentNode
    .lastElementChild.lastElementChild

    divOnClick.classList.add("fade")
    divOnClick.innerHTML = "<p>Primeiro evento</p>"
}

buttonOnClickExample.onclick = ()=>{
    let divOnClick = buttonOnClickExample.parentNode.parentNode
    .lastElementChild.lastElementChild

    divOnClick.classList.add("fade")
    divOnClick.innerHTML = "<p>Segundo Evento</p>"
}