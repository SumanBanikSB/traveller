
document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    const destination = document.getElementById('destination').value;
    const departDate = document.getElementById('departDate').value;
    const returnDate = document.getElementById('returnDate').value;

    // Validate fields
    if (!destination) {
        alert("Please select a destination.");
        return;
    }
    if (!departDate) {
        alert("Please enter a depart date.");
        return;
    }
    if (!returnDate) {
        alert("Please enter a return date.");
        return;
    }

    // Format the message for WhatsApp
    const message = `Destination: ${destination}\nDepart Date: ${departDate}\nReturn Date: ${returnDate}`;
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp URL with pre-filled message
    const whatsappUrl = `https://api.whatsapp.com/send?phone=9382475020&text=${encodedMessage}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappUrl, '_blank');
});
document.getElementById('submitBtnNew').addEventListener('click', function(event) {
    event.preventDefault();

    const title = 'From-To Booking'; // Title for the form
    const fromDestinationNew = document.getElementById('fromDestinationNew').value;
    const toDestinationNew = document.getElementById('toDestinationNew').value;
    const departDateNew = document.getElementById('departDateNew').value;
    const groupTypeNew = document.getElementById('groupTypeNew').value;

    if (!fromDestinationNew || !toDestinationNew || !departDateNew || !groupTypeNew) {
        alert("Please fill all fields in the From-To Booking section.");
        return;
    }

    const messageNew = `Form: ${title}\nFrom: ${fromDestinationNew}\nTo: ${toDestinationNew}\nDepart Date: ${departDateNew}\nTravel Type: ${groupTypeNew}`;
    const encodedMessageNew = encodeURIComponent(messageNew);
    const whatsappUrlNew = `https://api.whatsapp.com/send?phone=9382475020&text=${encodedMessageNew}`;
    window.open(whatsappUrlNew, '_blank');

});
