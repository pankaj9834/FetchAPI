const { response } = require("express");

const fetchbtn = document.getElementById("fetbtn");
fetchbtn.addEventListener("click", Eventhandler);

function Eventhandler() {
    url = 'Harry.txt'
    fetch(URL).then((response) => {

        return response.text();
    }).then((data) => {
        console.log(data);
    })
}
console.log('before get the data');
Eventhandler();
console.log('after getting the data');