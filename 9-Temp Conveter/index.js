
const textbox=document.getElementById("textbox");
const toFaen=document.getElementById("toFaren");
const toCel=document.getElementById("toCel");
const result=document.getElementById("result");
let temp;

function convert(){


        if(toFaren.checked){
            
            temp = Number(textbox.value);
            temp = temp * 9 / 5 + 32;
            result.textContent= temp.toFixed(1) + "°F";

        }
        else if(toCel.checked){

             temp = Number(textbox.value);
            temp = (temp - 32) * (5 / 9);
            result.textContent= temp.toFixed(1) + "°C";
            
        }
        else{
            result.textContent="Select a unit";
        }
}