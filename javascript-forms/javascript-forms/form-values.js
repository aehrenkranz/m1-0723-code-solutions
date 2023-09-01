const contactForm = document.getElementById('contact-form');
function handleSubmit(event) {
  event.preventDefault();
  const myObj = {
    name: contactForm.elements.name.value,
    email: contactForm.elements.email.value,
    message: contactForm.elements.message.value,
  };
  console.log('form data', myObj);
  contactForm.reset();
}

contactForm.addEventListener('submit', handleSubmit);
