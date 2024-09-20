// destination booking whatsapp code here
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
    const message = `Destination: ${destination}\nDepart Date: ${departDate}\nReturn Date: ${returnDate}`;
    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://api.whatsapp.com/send?phone=9382475020&text=${encodedMessage}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappUrl, '_blank');
});
//From-To Booking whatsapp code
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
//  contact page whatsapp code
function sendToWhatsApp(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Create the WhatsApp message
    var whatsappMessage = "Hello, I have a query.\n\n" +
                          "Name: " + name + "\n" +
                          "Email: " + email + "\n" +
                          "Subject: " + subject + "\n" +
                          "Message: " + message;

    // Encode the message for use in the URL
    var encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp URL with your phone number and the pre-filled message
    var whatsappUrl = "https://wa.me/9382475020?text=" + encodedMessage;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappUrl, "_blank");
}