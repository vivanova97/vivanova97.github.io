function sendMessage() {
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    if (checkFields(name, message) === true) {
        console.log(`${name}: ${message}`);
        resetFields();
    }
}

function checkFields(name, message) {
    if (name == '' || message == '') {
        document.getElementById('error').innerText = "Please specify your name and message. The fields cannot be empty.";

        return false;
    } else {
        return true;
    }
}

function resetFields(){
    document.getElementById("name").value = '';
    document.getElementById("message").value = '';
    document.getElementById("error").innerText = '';
}




