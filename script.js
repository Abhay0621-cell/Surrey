// Show a local confirmation for the demo contact form.
const contactForm = document.querySelector('#contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const status = document.querySelector('#form-status');

    if (!name) {
      status.textContent = 'Please enter your name before sending.';
      return;
    }

    status.textContent = `Thanks, ${name}! Your message is ready. This demo does not deliver it yet.`;
    contactForm.reset();
  });
}