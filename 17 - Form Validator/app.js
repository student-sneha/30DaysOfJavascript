function validateForm(){
    const name = document.getElementById("name").value; 
    const email = document.getElementById("email").value; 
    const password = document.getElementById("password").value; 
    const subject = document.getElementById("subject").value; 
    const agree = document.getElementById("agree").checked; 
    
    const nameError = document.getElementById("name-error"); 
    const emailError = document.getElementById("email-error"); 
    const passwordError = document.getElementById("password-error"); 
    const agreeError = document.getElementById("agree-error"); 
    const subjectError = document.getElementById("subject-error"); 

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    subjectError.innerHTML = "";
    agreeError.innerHTML = "";

    let isValid = true;
    if(name === "" || /\d/.text(name)){
        nameError.innerHTML = "Please enter your name properly.";
        isValid=false;
    }
    
    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        passwordError.textContent =
            "Please enter a password with at least 6 characters.";
        isValid = false;
    }

    if (subject === "") {
        subjectError.textContent =
            "Please select your course.";
        isValid = false;
    }

    if (!agree) {
        agreeError.textContent =
            "Please agree to the above information.";
        isValid = false;
    }
    return isValid;
}