// click button to generate password

document.getElementById("generate").addEventListener("click", displayPass);


function generateP() {
    event.preventDefault();
    let pass = '';
    const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];

    // Creates an array to list options  
    let validChars = [upper, lower, number, special];
    let passwordArray = []


    // Prompts user for password length 
    var passwordLength = prompt("Password Length (8-74)");
    passwordLength = parseInt(passwordLength)

    // Prompt user for password criteria 
    let passwordChoices = prompt('Enter Character Criteria: upper, lower, number, special');
    passwordChoices = passwordChoices.toLowerCase();

    if ((passwordLength > 8) && (passwordLength < 74)) {
        let upperRandom = concat(upper)
        upperRandom = upper(Math.floor(Math.random() * upper.length-1));
        validChars.concat(upperRandom);
        console.log(validChars)
        console.log(upperRandom)

    } else {
        upperRandom = false;
    }

    if ((passwordLength > 8) && (passwordLength < 74)) {
        let lowerRandom = lower.concat(Math.floor(Math.random() * lower.length-1));
        validChars.concat(lowerRandom);
        console.log(validChars)

    } else {
        lowerRandom = false;
    }

        let numberRandom = number.concat(Math.floor(Math.random() * number.length-1));
        validChars.concat(numberRandom);
        console.log(validChars)

        let specialRandom = special.concat(Math.floor(Math.random() * special.length-1));
        validChars.concat(specialRandom)
        console.log(validChars);


        // if includes lower, add lower to password choices

        // if includes special, add special to password choices

        // if includes number, add number to password choices

        if ((passwordChoices.includes("upper") || passwordChoices.includes("lower") || passwordChoices.includes("number") || passwordChoices.includes("special"))) {

            for (var i = 1; i <= passwordLength; i++) {
                var character = Math.floor(Math.random() * passwordChoices.length - 1);

                pass += passwordChoices.charAt(character);
                console.log(passwordChoices)
            }
            return pass;
       

    } else {

        alert("Must be between 8 and 74 character long")
    }

}


// Returns Value to Placeholder

function displayPass() {
    document.getElementById("password").value = generateP();
}


// validate user input meets criteria, including at least 1 character type

// password is generated that matches criteria 
