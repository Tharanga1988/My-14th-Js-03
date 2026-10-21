//Validation Function
function isValidPw(password, username) {
    if (password.length < 8) {
        return false;
    } else if (password.includes (' ')) {
        return false;
    } else if (password.includes(username)) {
        return false;
    } else {
        return true;
    }
}

//Event Listener
document.getElementById('passwordForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Page refresh

    //Get Input Values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    //Function Call
    const isValid = isValidPw(password, username);

    //Get result element
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';

    //Display on HTML and Console
    console.log(`Username: ${username} | Password: ${password}`);
    console.log("Is Valid Password ? ", isValid);

    if (isValid) {
        resultDiv.textContent = "Valid Password!";
        resultDiv.className = "success";
    } else {
        resultDiv.textContent = "Invalid Password!";
        resultDiv.className = "error";
    }

});