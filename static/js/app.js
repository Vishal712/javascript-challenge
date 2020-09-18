// from data.js
var tableData = data;

// YOUR CODE HERE!

//Select the button and form
var button = d3.select("button")
var form = d3.select("form");

button.on("click", runForm)
form.on("submit", runForm);

function runForm(){
    //prevent page from reloading
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Print the value to the console
    console.log(inputValue);

    //Filter the tableData for datetime matching inputValues
    var filteredData = tableData.filter(sighting => sighting.datetime == inputValue);

    //Select tbody element
    var tbody = d3.select("tbody");

    //clear the table
    tbody.html("");

    //Add to the tbody
    filteredData.forEach((UFOsighting) => {
        var row = tbody.append("tr");
        Object.entries(UFOsighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
      


}