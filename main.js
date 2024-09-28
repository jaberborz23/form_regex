
(function() {
    const generateBTn = document.querySelector(".generate-btn")
    function generatePin() {
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~1@#$%^&*"
        let pin = ''
        for (let i = 0; i < 8; i++){
            pin += chars.charAt(Math.floor(Math.random() * chars.length));
    
        }
        document.getElementById('pin').value = pin
        }
    
    generateBTn.addEventListener('click', () => {
            generatePin()
        })
    
    function validateForm() {
        const name =  document.querySelector('#name').value
        const username =  document.querySelector('#username').value
        const email =  document.querySelector('#email').value
        const phone =  document.querySelector('#phone').value
        const pin =  document.querySelector('#pin').value
        const password =  document.querySelector('#password').value
        const confirmPassword =  document.querySelector('#confirm-password').value
        
    
        const nameError = document.querySelector("#name-error");
        const usernameError = document.querySelector("#username-error");
        const emailError = document.querySelector("#email-error");
        const phoneError = document.querySelector("#phone-error");
        const pinError = document.querySelector("#pin-error");
        const passwordError = document.querySelector("#password-error");
    
    
    
        // error-message
        nameError.style.display = "none";
        usernameError.style.display = "none";
        emailError.style.display = "none";
        phoneError.style.display = "none";
        pinError.style.display = "none";
        passwordError.style.display = "none";
      
        // validation Regex
        const nameRegex = /^[a-zA-Z\s]{1,20}$/
        const usernameRegex = /^[a-zA-Z0-9_]{1,20}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phoneRegex = /^(?:\+880|01)[3-9]\d{8}$/;
        const pinRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
           
    
       
    
    
    
    
    
    
    
        let isValid = true;
    
        // Name validation
    
        if (!nameRegex.test(name)) {
            nameError.style.display = 'block'
            isValid = false
            
        }
        // userName validation
        if (!usernameRegex.test(username)) {
            usernameError.style.display = 'block'
            isValid = false
            
        }
        // phone validation
        if (!phoneRegex.test(phone)) {
            phoneError.style.display = 'block'
            isValid = false
            
        }
        // email validation
        if (!emailRegex.test(email)) {
            emailError.style.display = 'block'
            isValid = false
            
        }
        // pin  validation
        if (!pinRegex.test(pin)) {
            pinError.style.display = 'block'
            isValid = false
            
        }
        // password confirmation
        if (password !== confirmPassword) {
            passwordError.style.display = "block"
            isValid = false
        }
       
        return isValid
       
     }
    
     const formSubmit = document.querySelector('#profileForm')
     
    formSubmit.addEventListener("submit",(e)=> {
        if(!validateForm()) {
            e.preventDefault()
        }
    })
    
    
  }) ()













































