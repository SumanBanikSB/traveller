
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        // Get form values
        var name = document.querySelector('input[placeholder="Your name"]').value;
        var email = document.querySelector('input[placeholder="Your email"]').value;
        var destination = document.querySelector('select').value;

        // Prepare the WhatsApp message
        var whatsappMessage = `Hello, I am ${name} and my email is ${email}. I am interested in traveling to ${destination}. Please provide me with more details.`;

        // WhatsApp URL with your phone number and message
        var whatsappUrl = `https://wa.me/7431802847?text=${encodeURIComponent(whatsappMessage)}`;

        // Redirect to WhatsApp
        window.open(whatsappUrl, '_blank');
    });
