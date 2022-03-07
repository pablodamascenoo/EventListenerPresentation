let primaryButton = document.querySelector(".primary")

primaryButton.addEventListener("click", ()=>{
    let articles = [...document.querySelectorAll("article")]
    let window = document.querySelector(".black-window")

    for(let i=0; i<articles.length-1; i++){
        if(!articles[i].classList.contains("disabled")){
            window.classList.add("animation-window")
            setTimeout(()=>{
                if(i===0) primaryButton.innerText = "Proximo"
                if(articles[i+1].classList.contains("canvas-article")){
                    primaryButton.classList.add("margin-canvas")
                }
                if(articles[i].classList.contains("canvas-article")){
                    primaryButton.classList.remove("margin-canvas")
                }
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

let clear = document.querySelector(".clear")
let canvas = document.querySelector("canvas")
let ctx = canvas.getContext('2d')
let coord = {x:0, y:0}

canvas.addEventListener("mouseup", stopDraw)
canvas.addEventListener("mousedown", startDraw)
clear.addEventListener("click", clearCanvas)
resize();

function resize() {
  ctx.canvas.width = 700;
  ctx.canvas.height = 500;
}

function startDraw(event) {
    document.addEventListener('mousemove', draw);
    reposition(event);
}

function reposition(event) {
    var rect = canvas.getBoundingClientRect()
    coord.x = event.x - rect.left;
    coord.y = event.y - rect.top;
}

function stopDraw() {
    document.removeEventListener('mousemove', draw);
}

function draw(event) {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = document.querySelector("input").value;
    ctx.moveTo(coord.x, coord.y);
    reposition(event);
    ctx.lineTo(coord.x, coord.y);
    ctx.stroke();
}

function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}