const targetDate  = new Date("Jan 20, 2025 15:00:00").getTime();

// console.log(targetDate);


const countDown = setInterval(() => {
    const now = new Date().getTime();

    const distance = targetDate - now;


    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    
    if (distance < 0) {
        clearInterval(countDown);
        document.getElementById("timer").innerHTML = "Times UP  ";
    }

    
} , 1000)