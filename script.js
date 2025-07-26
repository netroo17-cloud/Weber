const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

showSlide(currentIndex); // Show first image
setInterval(nextSlide, 2000); // Change every 2 seconds

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  if (!name || !email || !message) {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please fill in all fields.';
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please enter a valid email address.';
    return;
  }

  // Success
  formMessage.style.color = 'green';
  formMessage.textContent = 'Message sent successfully!';

  // Clear form
  document.getElementById('contactForm').reset();
});
const toggleBtn = document.getElementById('toggle-theme');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Toggle icon
  toggleBtn.textContent =
    document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Animate skills when scrolling into view
window.addEventListener('scroll', () => {
  const skills = document.querySelector('#skills');
  const bars = document.querySelectorAll('.fill');
  const scrollY = window.scrollY + window.innerHeight;
  const skillsTop = skills.offsetTop;

  if (scrollY > skillsTop + 100) {
    bars[0].style.width = "90%";  // HTML
    bars[1].style.width = "85%";  // CSS
    bars[2].style.width = "75%";  // JS
  }
});

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Trigger animation on load
revealOnScroll();
