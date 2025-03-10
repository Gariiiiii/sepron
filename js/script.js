const navToggle = document.getElementById("navToggle");
if (navToggle) {
    navToggle.addEventListener("click", function () {
        document.getElementById("navbarNav").classList.toggle("active");
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const ticker = document.querySelector(".ticker-content");
    const wrapper = document.querySelector(".ticker-wrapper");

    // Clone the content for a seamless loop
    ticker.innerHTML += ticker.innerHTML;

    let position = 0;
    const speed = 1; // Lower value = slower speed

    function moveTicker() {
        position -= speed;
        if (position <= -ticker.scrollWidth / 2) {
            position = 0; // Reset position for a seamless effect
        }
        ticker.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(moveTicker);
    }

    // Ensure width fits content
    ticker.style.display = "flex";
    ticker.style.width = "max-content";

    moveTicker();
});

function updateCountdown() {
    const countdownDate = new Date().getTime() + (5 * 24 * 60 * 60 * 1000);

    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML =
            `<div class="countdown-item">
                <span class="countdown-number">${days < 10 ? "0" + days : days}</span>
                <span class="countdown-label">Days</span>
             </div> :
             <div class="countdown-item">
                <span class="countdown-number">${hours < 10 ? "0" + hours : hours}</span>
                <span class="countdown-label">Hours</span>
             </div> :
             <div class="countdown-item">
                <span class="countdown-number">${minutes < 10 ? "0" + minutes : minutes}</span>
                <span class="countdown-label">Mins</span>
             </div> :
             <div class="countdown-item">
                <span class="countdown-number">${seconds < 10 ? "0" + seconds : seconds}</span>
                <span class="countdown-label">Secs</span>
             </div>`;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
}

updateCountdown();


function validateEmail() {
        let email = document.getElementById("emailInput").value;
        let errorMessage = document.getElementById("error-message");
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.match(emailPattern)) {
            errorMessage.classList.add("d-none"); // Hide error if valid
        }
    }

    function subscribe() {
        let email = document.getElementById("emailInput").value;
        let errorMessage = document.getElementById("error-message");
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.match(emailPattern)) {
            errorMessage.classList.remove("d-none"); // Show error
        } else {
            errorMessage.classList.add("d-none"); // Hide error
            alert("Subscribed successfully!");
            document.getElementById("emailInput").value = ""; // Clear input
        }
}
    

  // When the user icon is clicked, show the login/signup modal using Bootstrap 5's API
  document.getElementById("userIcon").addEventListener("click", function(e) {
    e.preventDefault();
    var loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
    loginModal.show();
  });

  // Login/Signup panel toggle functionality
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  // Fix: Use the correct id ("container") from your HTML
  const container = document.getElementById("container");

  signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });
