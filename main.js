$(document).ready(function() {
// write your code here

$.getJSON("./data.json", data => {
    
   let mapLinks=[
       "https://goo.gl/maps/ad25gQFtC3mrD7s16" ,
         "https://goo.gl/maps/kcMujEmr96asT2Cr9" ,    
        "https://goo.gl/maps/G2XLw6wdTWjKajEA9" ,    
        "https://goo.gl/maps/VRejzGFqFTUeNd8e6"    ]
    data = data.reverse();
    for(i= 0; i < data.length; i++){
        var a = document.createElement('a'); 
        var link = document.createTextNode("Link to Google Maps");
        a.appendChild(link);
        a.title = "Link to Google Maps";
       
        a.href= mapLinks[i];
        document.body.appendChild(a);



        let nameColumn= `<tr><td>${data[i].name}</td><td>${data[i].description}</td> <td>${data[i].location}</td></tr>`
        $("#topsTable").after(nameColumn);
        console.log(data[i].location[0])

    }
})
});


