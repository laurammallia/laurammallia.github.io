var treasure = Math.floor(Math.random() * 9)
var bomb = Math.floor(Math.random() * 9)
var counter=0
var maxTries=5
var tries=0
function decrementTries(){
    if (maxTries>0) {
       maxTries--;
    }
    if (maxTries===0){
        alert("Game Over");
    }
}
const treasureFunc = (location) => {
   
    // if (location === bomb){
    //     document.getElementById(location).innerHTML = "💣"
    //     counter=counter+1
     if (location === treasure){
        document.getElementById(location).innerHTML = "🏴‍☠️"
    } else {
        document.getElementById(location).innerHTML = "💣"
     counter=counter+1
    }

}
const counterFunc =(count)=> {
    document.getElementById(count).innerHTML = counter
}

