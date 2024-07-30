document.getElementById('panForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var panCardNumber = document.getElementById('panInput').value;
    var pattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; 
    var errorMessage = document.getElementById('errorMessage');
    if (pattern.test(panCardNumber)) {
        errorMessage.innerHTML = 'Valid PAN Card Number';
        errorMessage.style.color = 'green';
    } else {
        errorMessage.innerHTML = 'Invalid PAN Card Number';
        errorMessage.style.color = 'red';
    }
});
