// Assignment Code
var generateEl = document.querySelector("#generate");

var password = document.getElementById("password");
var length;
var upper;
var lower;
var number;
var symbol;



const randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol
};



function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = ("!@#$%^&*(){}[]<>?,.=")
    return symbols[Math.floor(Math.random() * symbols.length)]
}



// Write password to the #password input
function generatePassword() {
    generateEl.addEventListener("click", () => {

    });

    length = prompt("How long do you want your password? (number between 8 and 128)");

    if (!length) {
        alert("Must enter a number");
    } 
    
    else if (length < 8 || length > 128) {
        length = prompt("You must choose between 8 and 128");
    }  
        
    else  {
    upper = confirm("Do you want to include Upper Case letters? ");
    lower = confirm("Do you want to include Lower Case letters? ");
    number = confirm("Do you want to include Numbers? ");
    symbol = confirm("Do you want to include Symbols? ");
    }



    if (upper === "true") {
        getRandomUpperCase.upper;
    }

    if (lower === "true") {
        getRandomLowerCase.lower;
    }

    if (number === "true") {
        getRandomNumber.number;
    }
    if (symbol === "true") {
        getRandomSymbol.symbol;
    }

    console.log(upper);
    console.log(lower);
    console.log(number);
    console.log(symbol);


    var password = [];
    var password = generatePassword(length, upper, lower, number, symbol);
    var passwordText = document.querySelector("#password");
    for (var i = 0; i < length; i++) {

    }

    function generatePassword() {
        document.getElementById("password").textContent = password;

        let generatedPassword = "";
        const typesCount = lower + upper + number + symbol;
        // console.log("typesCount: ", typesCount);

        const typesArr = [{
            upper
        }, {
            lower
        }, {
            number
        }, {
            symbol
        }].filter(
            item => Object.values(item)[0]
            
            );
        // console.log("typesArr: ", typesArr);
        

        if (typesCount === 0) {
            return "";
        }

        for (let i = 0; i < length; i += typesCount){
            typesArr.forEach(type => {
                const funcName = Object.keys(type)[0];
            
                // console.log("funcName: ",funcName);
                generatedPassword += randomFunc[funcName]();
            });
        }
        const finalPassword = generatedPassword.slice(0, length);
        return finalPassword;
    }

    passwordText.value = password;

    
}

// Add event listener to generate button
generateEl.addEventListener("click", generatePassword);

