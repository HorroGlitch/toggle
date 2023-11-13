let switches = document.querySelectorAll("input");
console.log(switches);


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}


for (let i = 0; i < switches.length; i++ ){
    switches[i].addEventListener("click", ()=>{
    let r = getRandomInt(0 ,switches.length);
    switches[r].checked = !switches[r].checked;
    });
    
    
}

console.log(getRandomInt, switches)

