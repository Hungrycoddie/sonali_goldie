// Function to handle the button click event
function showAlert() {
    alert('You clicked the button!');
}

// Select the button element
const button = document.getElementById('btn1');

// Attach the function as the event handler for the click event
button.addEventListener('click', showAlert);
