const display = document.getElementById('display_input');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = " ";
}

function deleteElement(){
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}