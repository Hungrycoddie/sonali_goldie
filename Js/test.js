function showMessage() {
    const day = document.getElementById("day").value;
    const messageElement = document.getElementById("message");
    const imageElement = document.getElementById("dayImage");

    let message;
    let imagePath;

    switch (day) {
        case "Monday":
            message = "Start your week with energy!";
            imagePath = "./Screenshot 2024-11-21 at 1.30.51 AM.png";
            break;
        case "Tuesday":
            message = "Keep going strong!";
            imagePath = "";
            break;
        case "Wednesday":
            message = "Halfway through the week!";
            imagePath = "";
            break;
        case "Thursday":
            message = "Almost there!";
            imagePath = "";
            break;
        case "Friday":
            message = "Weekend is near!";
            imagePath = "";
            break;
        case "Saturday":
            message = "Enjoy your weekend!";
            imagePath = "";
            break;
        case "Sunday":
            message = "Rest and recharge!";
            imagePath = "";
            break;
        default:
            message = "Please select a day.";
            imagePath = ""; 
    }

    // Set the message
    messageElement.innerHTML = message;

    // Set the image
    if (imagePath) {
        imageElement.src = imagePath;
        imageElement.style.display = "block"; 
    } else {
        imageElement.style.display = "none"; 
    }
}
