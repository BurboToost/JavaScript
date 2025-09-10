const minimum = 1;
const maximum = 100;
const ans = Math.floor(Math.random() * (maximum - minimum + 1));
console.log(ans);

let attempts= 0;
let guess;
let running= true;

while(running){
    
    guess = window.prompt(`Guess a number between ${minimum} - ${maximum}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert(`Please enter a valid number.`);
    }
    else if(guess < minimum || guess >  maximum){
        window.alert(`Please enter a valid number.`);
    }
    else{
        attempts++;
        if(guess < ans){
            window.alert(`TOO LOW! TRY AGAIN.`);
        }
        else if(guess > ans){
            window.alert(`TOO HIGH! TRY AGAIN.`);
        }   
        else{
            window.alert(`CORRECT! The answer was ${ans}. It took you ${attempts} attempts`);
            running = false;
        }
    }

}