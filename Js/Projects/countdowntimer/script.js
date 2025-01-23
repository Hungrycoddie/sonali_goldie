// const targetDate  = new Date("Jan 20, 2025 15:00:00").getTime();

// // console.log(targetDate);


// const countDown = setInterval(() => {
//     const now = new Date().getTime();

//     const distance = targetDate - now;


//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000);
// document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    
//     if (distance < 0) {
//         clearInterval(countDown);
//         document.getElementById("timer").innerHTML = "Times UP  ";
//     }

    
// } , 1000)


let countDown; // Variable to hold the interval

function startCountdown(targetDate) {
  countDown = setInterval(() => {
    const now = new Date().getTime(); 
    const distance = targetDate - now; 

    if (distance <= 0) {
      clearInterval(countDown); 
      document.getElementById("timer").textContent = "Time's up!";
      return;
    }

  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(
      "timer"
    ).textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}


function stopCountdown() {
  clearInterval(countDown); 
  document.getElementById("timer").textContent = "Timer Stopped!";
}


document.getElementById("stopButton").addEventListener("click", stopCountdown);


const targetDate = new Date().getTime() + 24 * 60 * 60 * 1000; 


startCountdown(targetDate);