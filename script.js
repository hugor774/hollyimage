function sendMessage() {
    var messageInput = document.getElementById("message");
    var message = messageInput.value;

    if (message !== "") {
        var chatlog = document.getElementById("chatlog");
        var newMessage = document.createElement("p");
        newMessage.textContent = "Client: " + message;
        chatlog.appendChild(newMessage);

        // Send message to the server (you can implement this functionality separately)
        // server.sendMessage(message);

        messageInput.value = "";
    }
}
