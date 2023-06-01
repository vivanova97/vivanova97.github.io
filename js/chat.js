function message()
{
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    if (name == '' || message == '') {
        console.log("Please specify your name and message. The fields cannot be empty.")
    }
    else{
        console.log(`${name}: ${message}`);
        document.getElementById("name").value = '';
        document.getElementById("message").value = '';
        document.getElementById("result").innerText = `Hello, ${name}!`
    }
}



// function message()
// {
//     var name = document.getElementById("name").value;
//     var message = document.getElementById("message").value;
//     if (name == '' || message == '') {
//         document.getElementById("error").innerText = "Fields 'name' and 'message' can't be empty"
//     }
//     else{
//         var newMessageDiv = document.createElement("div");
//         newMessageDiv.innerText = `${name}: ${message}`;

//         document.getElementById("result").appendChild(newMessageDiv);
//         document.getElementById("name").value = '';
//         document.getElementById("message").value = '';
//         document.getElementById("error").innerText = '';
//     }
// }


