function validateForm(){
    //create a control variable
    let aux = true;
    
    //take each field's value
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    //if field is empty, change display to have the symbol and set aux to false
    if (!firstName) {
        aux = false;
        //change symbol
        document.getElementById('firstnameicon').style.display = 'block';
        //display the error text
        document.getElementById('firstnamewrong').style.display = 'block';
    }

    if (!lastName) {
        aux = false;
        //change symbol
        document.getElementById('lastnameicon').style.display = 'block';
        //display the error text
        document.getElementById('lastnamewrong').style.display = 'block';
    }

    if (!email) {
        aux = false;
        //change symbol
        document.getElementById('emailicon').style.display = 'block';
        //display the error text
        document.getElementById('emailwrong').style.display = 'block';        
    }

    if (!password) {
        aux = false;
        //change symbol
        document.getElementById('passwordicon').style.display = 'block';
        //display the error text
        document.getElementById('passwordwrong').style.display = 'block';        
    }

    //after all checks, return aux
    return aux;
}