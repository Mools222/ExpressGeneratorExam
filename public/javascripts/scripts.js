function getJSONWithXMLHttpRequest(url, callbackFunction) {
    let xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open('GET', url, true);
    xmlHttpRequest.responseType = 'json';
    xmlHttpRequest.onload = function () {
        if (xmlHttpRequest.status === 200)
            callbackFunction(xmlHttpRequest.response);
        else {
            console.log("Error");
            console.log(xmlHttpRequest.status);
        }
    };
    xmlHttpRequest.send();
}

function insertRows(jsonArray) {
    let table = document.getElementById("table");

    console.log(table);

    for (let jsonObject of jsonArray) {
        let newRow = document.createElement("tr");

        for (let property in jsonObject) {
            let newData = document.createElement("td");
            newData.innerHTML = jsonObject[property];
            newRow.appendChild(newData);
        }

        table.appendChild(newRow);
    }
}

getJSONWithXMLHttpRequest("data/resurcer.json", insertRows)
