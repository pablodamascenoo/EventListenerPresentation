let primaryButton = document.querySelector(".primary")

primaryButton.addEventListener("click", ()=>{
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

let captureDiv = document.querySelector(".capture")
let innerCaptureDiv = captureDiv.querySelector("div")

captureDiv.addEventListener("click", async function(){
    alert("Eu venho do elemento pai")
    innerCaptureDiv.querySelector("p").innerText = "Eu venho primeiro"
}, true)

innerCaptureDiv.addEventListener("click", ()=>{
    alert("Eu venho do elemento filho")
    innerCaptureDiv.querySelector("p").innerText = "Eu venho depois"
}, true)
