// document.getElementById("button").addEventListener("click", checkNumber());

function checkNumber() {
    var input = document.getElementById("number").value;
    input = parseInt(input);

    // console.log(isNaN(input));
    if (!isNaN(input)) {
        document.getElementById("validation-error").innerText = "";
        fetch('http://numbersapi.com/' + input)
            .then(function (response) {
                return response.text();
            })

            .then(function (response) {
                document.getElementById("output").innerText = response;
                console.log(response);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    } else {
        document.getElementById("validation-error").innerText = "Please, insert number!";
    }

}




