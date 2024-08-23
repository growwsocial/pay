const signUpBtnLink = document.querySelector('.signUpBtn-link');
    const signInBtnLink = document.querySelector('.signInBtn-link');
    const wrapper = document.querySelector('.wrapper');

    // Add event listeners to toggle the "active" class
    signUpBtnLink.addEventListener('click', (event) => {
      event.preventDefault();
      wrapper.classList.add('active');
    });

    signInBtnLink.addEventListener('click', (event) => {
      event.preventDefault();
      wrapper.classList.remove('active');
    });

    function handleSubmit(event) {
      event.preventDefault();
      
      // Collect form data
      const form = document.getElementById('payment-form');
      const number = form.elements['number'].value;
      const time = form.elements['time'].value;
      const email = form.elements['email'].value;
      const amount = form.elements['amount'].value;
      const reference = form.elements['reference'].value;

      // Create a WhatsApp message link
      const whatsappUrl = `https://wa.me/8252053838?text=Mobile Number: ${number}%0APayment Time: ${time}%0ARegistered Email: ${email}%0AAmount: ${amount}%0AReference: ${reference}`;

      // Immediately redirect to WhatsApp
      window.location.href = whatsappUrl;
    }
