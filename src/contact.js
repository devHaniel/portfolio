const form = document.getElementById('contact-form');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  formData.append('access_key', '7a680359-052c-4860-9e7d-894b0713eb67'); // ← pega tu clave aquí

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData
  });

  const data = await response.json();

  if (data.success) {
    alert('¡Mensaje enviado con éxito!');
    form.reset();
  } else {
    alert('Hubo un error. Por favor intenta de nuevo.');
    console.error(data);
  }
});