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
  car1 = ["", "", "", "", "", ""];
}
if (car2 == null) {
  car2 = ["", "", "", "", "", ""];
}
if (car3 == null) {
  car3 = ["", "", "", "", "", ""];
}
if (car4 == null) {
  car4 = ["", "", "", "", "", ""];
}
if (car5 == null) {
  car5 = ["", "", "", "", "", ""];
}
if (car6 == null) {
  car6 = ["", "", "", "", "", ""];
}
 /*============================================================================*/

 let carlist = [
    { "Car Type": car1[0], "Registration": car1[1], "Current Miles": car1[2], "Miles Remaining": car1[3], "Schedule leaving": car1[4], "Percentage Remaining": car1[5]}, /* Displays the data stored in the Array that is within "Column 1" to "Column 4" */
    { Car_Type: car2[0], Registration: car2[1], Current_Miles: car2[2], Miles_Remaining: car2[3], Schedule_leaving: car2[4], battery_remaining: car2[5] },
    { Car_Type: car3[0], Registration: car3[1], Current_Miles: car3[2], Miles_Remaining: car3[3], Schedule_leaving: car3[4], battery_remaining: car3[5] },
    { Car_Type: car4[0], Registration: car4[1], Current_Miles: car4[2], Miles_Remaining: car4[3], Schedule_leaving: car4[4], battery_remaining: car4[5] },
    { Car_Type: car5[0], Registration: car5[1], Current_Miles: car5[2], Miles_Remaining: car5[3], Schedule_leaving: car5[4], battery_remaining: car5[5] },
    { Car_Type: car6[0], Registration: car6[1], Current_Miles: car6[2], Miles_Remaining: car6[3], Schedule_leaving: car6[4], battery_remaining: car6[5] }
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