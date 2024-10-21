
document.getElementById('sendButton').addEventListener('click', userForm);

function userForm() {
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const province = document.getElementById('province').value;
    const membership = document.querySelector('input[name="membership"]:checked').value;

    
    if (!firstName || !lastName || !email || !address || !city || !province) {
        alert('Please fill out all fields.');
        return;
    }

    
    document.getElementById('userInfo').innerHTML = `
        <p>Full Name: ${firstName} ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Address: ${address}, ${city}, ${province}</p>
        <p>Membership: ${membership}</p>
    `;
}



document.getElementById('calculateButton').addEventListener('click', myExcelFuns);

function myExcelFuns() {
    
    let numberStr = document.getElementById('numbers').value;
    if (!numberStr) {
        alert('Please enter some numbers');
        return;
    }

    
    let numberArr = numberStr.trim().split(/\s+/).map(Number);

    
    let validNumbers = numberArr.filter(num => !isNaN(num));

    if (validNumbers.length === 0) {
        alert('Please enter valid numbers');
        return;
    }

    let result;

    
    if (document.getElementById('sum').checked) {
        result = validNumbers.reduce((a, b) => a + b, 0);
    } else if (document.getElementById('avg').checked) {
        result = validNumbers.reduce((a, b) => a + b, 0) / validNumbers.length;
    } else if (document.getElementById('max').checked) {
        result = Math.max(...validNumbers);
    } else if (document.getElementById('min').checked) {
        result = Math.min(...validNumbers);
    }

    
    document.getElementById('result').innerText = `Result: ${result}`;
}
