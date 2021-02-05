var selectedRow = null

/*================================================
 * Main JavaScript Engine
 =================================================*/
function onFormSubmit() {
    if (validate()) { // First checks if data is valid before processing data
        var formData = readFormData();
        if (selectedRow == null) { // Checks if value is null, if so enter data as new asset
            insertNewRecord(formData);
            showTable(); // Triggers 2nd JavaScript for charging table
        } else // Otherwise update data from selected column
            updateRecord(formData);
        resetForm(); // Once functions are finished, set all values in field to null
    }
}
/*================================================*/

/*================================================
 * Reads data from Form and stores in Array
 =================================================*/
function readFormData() {
    var formData = {};
    formData["reg"] = document.getElementById("reg").value;
    formData["curRange"] = document.getElementById("curRange").value;
    formData["desMile"] = document.getElementById("desMile").value;
    formData["leaTime"] = document.getElementById("leaTime").value;
    console.log(formData);
    return formData;
}
/*================================================*/

/*================================================
 * Insert Data into Table
 =================================================*/
function insertNewRecord(data) {
    var table = document.getElementById("carList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0); // Allowcating data to column 1
    cell1.innerHTML = data.reg;
    cell2 = newRow.insertCell(1); // Allowcating data to column 2
    cell2.innerHTML = data.curRange;
    cell3 = newRow.insertCell(2); // Allowcating data to column 3
    cell3.innerHTML = data.desMile;
    cell4 = newRow.insertCell(3); // Allowcating data to column 4
    cell4.innerHTML = data.leaTime;
    cell4 = newRow.insertCell(4); // Allowcating data to column 5
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`; // Generates two buttons for user to use, if they require to edit the data
}
/*================================================*/

/*================================================
 * Resets data field/ Array
 =================================================*/
function resetForm() {
    document.getElementById("reg").value = "";
    document.getElementById("curRange").value = "";
    document.getElementById("desMile").value = "";
    document.getElementById("leaTime").value = "";
    selectedRow = null;
}
/*================================================*/

/*================================================
 * Fetches Data from Table
 =================================================*/
function onEdit(td) {
    selectedRow = td.parentElement.parentElement; // Gathers selected data in array by html parent element in generated td element
    document.getElementById("reg").value = selectedRow.cells[0].innerHTML; // fetch value inside cell that is inside array position 0
    document.getElementById("curRange").value = selectedRow.cells[1].innerHTML; // fetch value inside cell that is inside array position 1
    document.getElementById("desMile").value = selectedRow.cells[2].innerHTML; // fetch value inside cell that is inside array position 2
    document.getElementById("leaTime").value = selectedRow.cells[3].innerHTML; // fetch value inside cell that is inside array position 3
}
/*================================================*/

/*================================================
 * Updates Data to selected row
 =================================================*/
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.reg;
    selectedRow.cells[1].innerHTML = formData.curRange;
    selectedRow.cells[2].innerHTML = formData.desMile;
    selectedRow.cells[3].innerHTML = formData.leaTime;
}
/*================================================*/

/*================================================
 * Deletes Data to selected row
 =================================================*/
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) { // Displays Boolean alert message, to check if user wishes to delete data
        row = td.parentElement.parentElement; // Gathers selected data in array by html parent element in generated td element
        document.getElementById("carList").deleteRow(row.rowIndex); // Targets element inside of table, deletes targetted row
        document.getElementById("carCharge").deleteRow(row.rowIndex); // Targets element inside of table, deletes targetted row
        resetForm();
    }
}
/*================================================*/

/*================================================
 * Data Validation, Checks that data is correct
 =================================================*/
function validate() {
    isValid = true; // Default value is set to true
    isValid1 = true;
    isValid2 = true;
    isValid3 = true;
    isValid4 = true;

    if (document.getElementById("reg").value == "") { // Checks that value has data, otherwise set variable to false
        isValid1 = false;
        document.getElementById("regValidationError").classList.remove("hide");
    } else { // If Value is valid, hide error message
        isValid1 = true;
        if (!document.getElementById("regValidationError").classList.contains("hide"))
            document.getElementById("regValidationError").classList.add("hide");
    }

    var curRange = document.getElementById("curRange").value;
    var maxMile = 250;
    if(isNaN(curRange) || curRange == "") { // Checks that value is numbers only
        isValid2 = false;
        document.getElementById("curRangeValidationError").classList.remove("hide");
    } else if (curRange > maxMile) {
        isValid2 = false;
        document.getElementById("curRangeValidationError").classList.remove("hide");
    } else { // If Value is valid, hide error message
        isValid2 = true;
        if (!document.getElementById("curRangeValidationError").classList.contains("hide"))
            document.getElementById("curRangeValidationError").classList.add("hide");
    }

    var destRange = document.getElementById("desMile").value;
    if(isNaN(destRange) || destRange == "") { // Checks that value is numbers only
        isValid3 = false;
        document.getElementById("destValidationError").classList.remove("hide");
    } else if (destRange > maxMile) {
        isValid3 = false;
        document.getElementById("destValidationError").classList.remove("hide");
    } else { // If Value is valid, hide error message
        isValid3 = true;
        if (!document.getElementById("destValidationError").classList.contains("hide"))
            document.getElementById("destValidationError").classList.add("hide");
    }

    /*============== Checks Time Schedule ============*/
    var inputEle = document.getElementById('leaTime');

    var timeSplit = inputEle.value.split(':'), hours, minutes, meridian;
    hours = timeSplit[0];
    minutes = timeSplit[1];
    if (hours > 12) {
        meridian = 'PM';
        hours -= 12;
      } else if (hours < 12) {
        meridian = 'AM';
        if (hours == 0) {
          hours = 12;
        }
      } else {
        meridian = 'PM';
      }
      console.log(hours + ':' + minutes + ' ' + meridian);

      if(hours >= 12 && meridian == "PM" ) {
        isValid4 = false;
        document.getElementById("timeValidationError").classList.remove("hide");
      } else {
          isValid4 = true;
          if(!document.getElementById("timeValidationError").classList.contains("hide"))
            document.getElementById("timeValidationError").classList.add("hide");
      }

    /*================================================*/

    /*================= Final Results ================*/
    if(isValid1 == false || isValid2 == false || isValid3 == false || isValid4 == false) {
        isValid = False;
    } else {
        isValid = true;
    }
    /*================================================*/
    return isValid;
}
/*================================================*/