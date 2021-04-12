// from data.js
var dataTable = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")

var button = d3.select("#filter-btn");
var form = d3.select("#filters");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(dataTable)
    
    var filteredSightings = dataTable.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredSightings)

    tbody.html("");

    filteredSightings.forEach(function(filteredReport) {
        console.log(filteredReport);
        var row = tbody.append("tr");
        Object.entries(filteredReport).forEach(function([key, value]) {
          console.log(key, value);
     
          var cell = row.append("td");
          cell.text(value);
        });
      });
}

data.forEach(function(UfoReport) {
   console.log(UfoReport);
   var row = tbody.append("tr");
   Object.entries(UfoReport).forEach(function([key, value]) {
     console.log(key, value);

     var cell = row.append("td");
     cell.text(value);
   });
 });




