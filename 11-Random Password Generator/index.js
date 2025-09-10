
function generatePass(length, includeLow, includeUp, includeNum, includeSym){

    const lowercase = `abcdefghijklmnopqrstuvwxyz`;
    const upercase  = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const num = `0123456789`;
    const sym = `~!@#$%^&*()_+=`;

    let allowedChars = "";
    let password = "";

    allowedChars += includeLow ? lowercase : "";
    allowedChars += includeUp ? upercase : "";
    allowedChars += includeNum ? num : "";
    allowedChars += includeSym ? sym : "";

   if(length <= 0){
    return `(Password length mus be at least 1)`;
   }
   if(allowedChars.length === 0){
    return `(At least one set of characters needs to be selected)`;
   }

   for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
   }

    return password;
}

const passlen = 12;
const includeLow = true;
const includeUp = true;
const includeNum = true;
const includeSym = true;


const password = generatePass(passlen,
                                includeLow,
                                includeUp,
                                includeNum,
                                includeSym);

console.log(`Generate password : ${password}`);
