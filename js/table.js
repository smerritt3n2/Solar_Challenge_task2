 /*==============================================================================
 * Generates a Table Function & Gathers Information from localstorage
 ==============================================================================*/

 /*=========================== Retrieve Data Area =============================*/
 var retrievedData1 = localStorage.getItem('car1'); /* Targets Sting Storage in "localStorage" */
 var retrievedData2 = localStorage.getItem('car2');
 var retrievedData3 = localStorage.getItem('car3');
 var retrievedData4 = localStorage.getItem('car4');
 var retrievedData5 = localStorage.getItem('car5');
 var retrievedData6 = localStorage.getItem('car6');
 /*============================================================================*/

 /*=========================== Converting Area ================================*/
 var car1 = JSON.parse(retrievedData1); /* Converts the String List back into an "Array Variable" */
 var car2 = JSON.parse(retrievedData2); 
 var car3 = JSON.parse(retrievedData3); 
 var car4 = JSON.parse(retrievedData4); 
 var car5 = JSON.parse(retrievedData5); 
 var car6 = JSON.parse(retrievedData6); 
 /*============================================================================*/

 /*=========================== Data Checking Area =============================*/
if (car1 == null) { /* Checks that Array is "real" if not then create array for function to use */
  car1 = ["", "", "", "", ""];
}
if (car2 == null) {
  car2 = ["", "", "", "", ""];
}
if (car3 == null) {
  car3 = ["", "", "", "", ""];
}
if (car4 == null) {
  car4 = ["", "", "", "", ""];
}
if (car5 == null) {
  car5 = ["", "", "", "", ""];
}
if (car6 == null) {
  car6 = ["", "", "", "", ""];
}
 /*============================================================================*/

 let carlist = [
    { "Car Registration": car1[0], "Current Miles Done Today": car1[1], "Miles Remaining Within Car": car1[2], "Miles Needed To Reach Destination": car1[3], "Schedule leaving": car1[4]}, /* Displays the data stored in the Array that is within "Column 1" to "Column 4" */
    { Registration: car2[0], Current_Miles: car2[1], Miles_Remaining: car2[2], Destination_miles: car2[3], Schedule_leaving: car2[4] },
    { Registration: car3[0], Current_Miles: car3[1], Miles_Remaining: car3[2], Destination_miles: car3[3], Schedule_leaving: car3[4] },
    { Registration: car4[0], Current_Miles: car4[1], Miles_Remaining: car4[2], Destination_miles: car4[3], Schedule_leaving: car4[4] },
    { Registration: car5[0], Current_Miles: car5[1], Miles_Remaining: car5[2], Destination_miles: car5[3], Schedule_leaving: car5[4] },
    { Registration: car6[0], Current_Miles: car6[1], Miles_Remaining: car6[2], Destination_miles: car6[3], Schedule_leaving: car6[4] }
  ];
  
  function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
  let table = document.querySelector("table");
  let data = Object.keys(carlist[0]);
  generateTableHead(table, data);
  generateTable(table, carlist);

 /*=============================================================================*/ 