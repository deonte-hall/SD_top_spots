$(document).ready(function() {

/* Pulling data fromm JSON file using getJSON & plugging 
that value into the 'data' parameter */

$.getJSON("./data.json", data => {
    
    //Tried creating an array of links to be able to iterate through for buttons in table
   let mapLinks=[
       "https://goo.gl/maps/ad25gQFtC3mrD7s16" ,
         "https://goo.gl/maps/kcMujEmr96asT2Cr9" ,    
        "https://goo.gl/maps/G2XLw6wdTWjKajEA9" ,    
        "https://goo.gl/maps/VRejzGFqFTUeNd8e6"    ]

        //Reversed the order of data 
    data = data.reverse();

        //This for loop will iterate through 'data' and update the HTML rows in the table according to each element in the JSON file

    for(i= 0; i < data.length; i++){

        //These declarations were an attempt to add the 'a' variable inside the <td> tags where nameColumn is declared 

        var a = document.createElement('a'); 
        var link = document.createTextNode("Link to Google Maps");
        a.appendChild(link);
        a.title = "Link to Google Maps";
        a.href= mapLinks[i];

        //!** Bug here, there are multiple links on the bottom of page (how to put them in table?)

        document.body.appendChild(a);


        //This final set of instructions will add the indexed values to the table rows using the after() method
        
        let nameColumn= `<tr><td>${data[i].name}</td><td>${data[i].description}</td> <td>Coordinates are ${data[i].location}</td></tr>`
        $("#topsTable").after(nameColumn);
        console.log(data[i].location[0])

    }
})
});


