window.onload = function () {
    const hour = new Date().getHours();
    const greeting = document.getElementById('greeting');
  
    if (hour < 12) {
      greeting.textContent = 'Good Morning!';
    } else if (hour < 18) {
      greeting.textContent = 'Good Afternoon!';
    } else {
      greeting.textContent = 'Good Evening!';
    }
  };
  
  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
  }

//   For project page
function toggleDetails(id) {
    const details = document.getElementById(id);
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
  }

//   for contact page 
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{10,15}$/;
  
    if (!name || !email) {
      formMessage.textContent = "Please fill out all required fields.";
      formMessage.style.color = "red";
      return;
    }
  
    if (!emailRegex.test(email)) {
      formMessage.textContent = "Please enter a valid email address.";
      formMessage.style.color = "red";
      return;
    }
  
    if (phone && !phoneRegex.test(phone)) {
      formMessage.textContent = "Invalid phone number format.";
      formMessage.style.color = "red";
      return;
    }
  
    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";
  });

  
//   for survey page
document.getElementById('surveyForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const message = document.getElementById('surveyMessage');
  
    if (!name || !email) {
      message.textContent = "Please fill out all required fields.";
      message.style.color = "red";
      return;
    }
  
    if (!emailRegex.test(email)) {
      message.textContent = "Please enter a valid email address.";
      message.style.color = "red";
      return;
    }
  
    message.textContent = "Survey submitted. Thank you!";
    message.style.color = "green";
  });

//   for toggle button darkmode au light modee
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// kuload saved theme
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
