    // click button to generate password
    
    document.getElementById("generate").addEventListener("click", displayPass);


    function generateP() {
        let pass = '';  
            const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const lower = 'abcdefghijklmnopqrstuvwxyz';
            const number = '0123456789';
            const special = '!@#$%^&*()_+'; 

    // Creates an array to list options  
            let passwordChoices = (upper + lower + number + special);
                
    
    // Prompts user for password length 
        var passwordLength = prompt("Password Length (8-74)");
            passwordLength = parseInt(passwordLength)

    // Prompt user for password criteria 
        // passwordChoices = prompt('Enter Character Criteria: upper, lower, number, special');
        // passwordChoices = passwordChoices.toLowerCase();

        if((passwordLength>8) && (passwordLength<74)) {

            // if((passwordChoices.includes("upper") || passwordChoices.includes("lower") || passwordChoices.includes("number") || passwordChoices.includes("special"))) {
                
                for (var i = 1; i<= passwordLength; i++) {
                    var character = Math.floor(Math.random() * passwordChoices.length - 1);
        
                    pass += passwordChoices.charAt(character);
                    console.log(passwordChoices)
                }   
                return pass;
            // } else { 
            //     alert("must include at least one criteria")
             }
console.log(character)

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
