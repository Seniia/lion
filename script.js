const lion = document.getElementById("lion")
const fizika = document.getElementById("fizika")

document.addEventListener("keydown", function(event){
    jump()
});

function jump(){
    if(lion.classList !="jump" ){
        lion.classList.add("jump")
    }
    setTimeout(function(){
        lion.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval(function(){
    let lionTop = parseInt(window.getComputedStyle(lion).getPropertyValue("top"))
    let fizikaLeft = parseInt(window.getComputedStyle(fizika).getPropertyValue("left"))

    if(fizikaLeft < 50 && fizikaLeft > 0 && lionTop >= 140){
        alert("Game Over!!!")
    }
}, 10)
