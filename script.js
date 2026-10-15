// Send the contact form to Formspree and show the result on the page.
const contactForm = document.querySelector('#contact-form');
const formspreeEndpoint = 'https://formspree.io/f/xwlvaowv';

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const status = document.querySelector('#form-status');
    const submitButton = contactForm.querySelector('button[type="submit"]');

    if (formspreeEndpoint.includes('REPLACE_WITH_YOUR_FORM_ID')) {
      status.textContent = 'The contact form has not been connected yet.';
      return;
    }

    status.textContent = 'Sending your message…';
    submitButton.disabled = true;

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(contactForm)
      });

      if (response.ok) {
        status.textContent = 'Thanks! Your message was sent.';
        contactForm.reset();
      } else {
        status.textContent = 'Your message could not be sent. Please try again.';
      }
    } catch (error) {
      status.textContent = 'A connection error occurred. Please try again.';
    } finally {
      submitButton.disabled = false;
    }
  });
}
