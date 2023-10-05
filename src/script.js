// write your JavaScript here
document.getElementById('sub').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const error = document.getElementById('error');
    var checkbox = document.getElementById("cbx");

    if (!email.includes('@')) { 
        error.textContent = 'Please enter a valid email address';
        return
    }else if (!checkbox.checked){
        error.textContent = 'Please Check the box';
        return
    }else{
        error.textContent = '';
        alert('You have successfully subscribed to our newsletter!');
    }
});

