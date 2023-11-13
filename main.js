const switches = document.querySelectorAll("input");

console.log(switches);

let tblSwitch = [switches];

// console.log(tblSwitch);

function allTheSwitchesSwitch(){  
    console.log("hello");
}

// for (let i = 0; i < tblSwitch.length; i++ ){
tblSwitch.addEventListener("click", allTheSwitchesSwitch);
// }