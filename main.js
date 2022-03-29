$(document).ready(function() {
// write your code here

$.getJSON("./data.json", data => {
    for(i= data.length -1; i >= 0; i--){
        let nameColumn= `<tr><td>${data[i].name}</td><td>${data[i].description}</td> <td>${data[i].location}</td></tr>`
        $("#topsTable").after(nameColumn);
    }
})
});


