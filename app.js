let display = document.querySelector(".display");

let calculate = (number)=>{
    display.value = display.value+number;
}

let result= ()=>{
    try{
        display.value = eval(display.value)
    }
    catch(err){
        alert("Machi, This Invalid Input")
    }
}

function clr(){
    display.value=" ";
}
function del(){
    display.value= display.value.slice(0,-1);
}