// step number: 1 add click event with the submi button
document.getElementById('btn-submit').addEventListener('click',function(){
    
    // Step-2: get the email address insid the email input field 
    // always remember to use .value to get text from a an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    

    // step-3: get password 
    // 3.a: get password
    // 3.b: set id on the html element
    // 3.c: get the valu from the element
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    


    // DANGER: DO NOT  Verify email password on the client side
    // Step-4: Verify email and Password

    if(email === 'sayedarifulhoque@gmail.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('tui password vule gesos toke ami tejjo sontan gosona korlam. ')
    }

})