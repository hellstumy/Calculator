
const display = document.getElementById("display")
function appendToDisplay(input){
    display.value += input
}
function clearDisplay(){
    display.value = ""
}
function calculate(){
    if(display.value - Infinity){
        display.value = "Error"
    }

    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "ERROR"
    }
}