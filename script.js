// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Basic validation for demonstration purposes
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (name && email) {
    alert('Form submitted!');
  } else {
    alert('Please fill in all fields.');
  }
});
