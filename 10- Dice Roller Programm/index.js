function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceres = document.getElementById("diceres");
    const diceimg = document.getElementById("diceimg");
    const values = [];
    const images = [];
    
    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`)

    }
    diceres.textContent = `dice: ${values.join(`, `)}`;
    diceimg.innerHTML = images.join(' ');
}