
/**
 * 
 * @param {*} endPoint 
 */
function getData(endPoint) {
    fetch('http://numbersapi.com/' + endPoint)
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
}

/*
 * this function gets the value of the input and 
 * executes different functions depending on the api type. 
 */
function checkNumber() {
    var input = document.getElementById("number").value;
    input = parseInt(input);

    if (!isNaN(input)) {
        let apiType = checkType();
        if (apiType == "math") {
            getData(input + "/" + "math");
        } else if (apiType == "trivia") {
            getData(input);
        } else if (apiType == "date") {
            getDate(input);
        }
    } else {
        document.getElementById("validation-error").innerText = "Please, insert number!";
    }
}

/**
 * 
 * @returns api type.
 */
function checkType() {
    var options = document.getElementById("options");
    var apiType = options.value;


    if (apiType == "date") {
        document.getElementById("month").style.display = "block";
    } else {
        document.getElementById("month").style.display = "none";
    }

    return apiType;
}


function getDate(input) {
    var month = document.getElementById("month").value;
    month = parseInt(month);

    if (!isNaN(input) && !isNaN(month)) {
        document.getElementById("validation-error").innerText = "";
        getData(month + "/" + input + "/" + "date");
    } else {
        document.getElementById("validation-error").innerText = "Please, insert number!";
    }
}

function getRandom() {
    getData("random" + "/" + "trivia");
}






