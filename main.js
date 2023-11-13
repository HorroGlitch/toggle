// Random switch

// let switches = document.querySelectorAll("input");
// console.log(switches);


// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); 
// }


// for (let i = 0; i < switches.length; i++ ){
//     switches[i].addEventListener("click", ()=>{
//     let r = getRandomInt(0 ,switches.length);
//     switches[r].checked = !switches[r].checked;
//     });
    
    
// }

// console.log(getRandomInt, switches)


// pattern switch

let switches = document.querySelectorAll("input");
console.log(switches);

// function getPatternSwitch() {
//     if (switches[0].checked){
//         switches[3].checked;
//         switches[2].checked;
//     }
// }

for (let i = 0; i < switches.length; i++){
    switches[i].addEventListener("click", ()=>{
        if (switches[0].checked) {
            console.log("hi");
        } else if (switches[1].checked){
            console.log("howdy");
        } 
    });
    
    
}

