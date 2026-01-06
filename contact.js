
  const form = document.querySelector('form');
  const output = document.createElement('div');
  form.after(output);

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting

    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    output.innerHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
  });

