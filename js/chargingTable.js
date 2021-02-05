/*================================================
 * Main JavaScript Engine
 =================================================*/
 function showTable() {
    var formData = getFormData();
    addCurrentRecord(formData);
    reveal(); // Triggers 2nd JavaScript for charging table
}
/*================================================*/

/*================================================
 * Reads data from Form and stores in Array
 =================================================*/
 function getFormData() {
    var formData = {};
    formData["reg"] = document.getElementById("reg").value;
    formData["curRange"] = document.getElementById("curRange").value;
    formData["desMile"] = document.getElementById("desMile").value;
    formData["leaTime"] = document.getElementById("leaTime").value;
    return formData;
}
/*================================================*/

/*================================================
 * Insert Data into Table
 =================================================*/
 function addCurrentRecord(data) {
    var table = document.getElementById("carCharge").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0); // Allowcating data to column 1
    cell1.innerHTML = data.reg;
    var chargingSet = calculation(); // Calculates final results
    cell2 = newRow.insertCell(1); // Allowcating data to column 2
    cell2.innerHTML = chargingSet.charge;

    if(chargingSet.one == true) {
        cell3 = newRow.insertCell(2); // Allowcating data to column 3
        cell3.innerHTML = `<td></td>`;
    }
    if(chargingSet.two == true) {
        cell4 = newRow.insertCell(3); // Allowcating data to column 4
        cell4.innerHTML = `<td></td>`;
    }
    if(chargingSet.three == true) {
        cell5 = newRow.insertCell(4); // Allowcating data to column 5
        cell5.innerHTML = `<td></td>`;
    }
    if(chargingSet.four == true) {
        cell6 = newRow.insertCell(5); // Allowcating data to column 6
        cell6.innerHTML = `<td></td>`;
    }
    if(chargingSet.five == true) {
        cell7 = newRow.insertCell(6); // Allowcating data to column 7
        cell7.innerHTML = `<td></td>`;
    }
    if(chargingSet.six == true) {
        cell8 = newRow.insertCell(7); // Allowcating data to column 8
        cell8.innerHTML = `<td></td>`;
    }
    if(chargingSet.seven == true) {
        cell9 = newRow.insertCell(8); // Allowcating data to column 9
        cell9.innerHTML = `<td></td>`;
    }
    if(chargingSet.eight == true) {
        cell10 = newRow.insertCell(9); // Allowcating data to column 10
        cell10.innerHTML = `<td></td>`;
    }
    if(chargingSet.nine == true) {
        cell11 = newRow.insertCell(10); // Allowcating data to column 11
        cell11.innerHTML = `<td></td>`;
    }
    if(chargingSet.ten == true) {
        cell12 = newRow.insertCell(11); // Allowcating data to column 12
        cell12.innerHTML = `<td></td>`;
    }
}
/*================================================*/

/*================================================
 * Calculating Results for charging time
 =================================================*/
 function calculation() {
    var chargingSet = {};
    var chargingHour = 0;
    var currentMiles = document.getElementById("curRange").value;
    var destinationMiles = document.getElementById("desMile").value;

    if((currentMiles < destinationMiles)) {
        chargingSet["charge"] = "Yes"; // Sets Value within Array
        chargingSet["one"] = true;
        currentMiles = parseInt(currentMiles) + 44;
        chargingHour + 1;
        if(currentMiles < destinationMiles) {
            chargingSet["two"] = true;
            currentMiles = parseInt(currentMiles) + 44;
            chargingHour + 1;
            if(currentMiles < destinationMiles) {
                chargingSet["three"] = true;
                currentMiles = parseInt(currentMiles) + 44;
                chargingHour + 1;
                if(currentMiles < destinationMiles) {
                    chargingSet["four"] = true;
                    currentMiles = parseInt(currentMiles) + 44;
                    chargingHour + 1;
                    if(currentMiles < destinationMiles) {
                        chargingSet["five"] = true;
                        currentMiles = parseInt(currentMiles) + 44;
                        chargingHour + 1;
                        if(currentMiles < destinationMiles) {
                            chargingSet["six"] = true;
                            currentMiles = parseInt(currentMiles) + 44;
                            chargingHour + 1;
                            if(currentMiles < destinationMiles) {
                                chargingSet["seven"] = true;
                                currentMiles = parseInt(currentMiles) + 44;
                                chargingHour + 1;
                                if(currentMiles < destinationMiles) {
                                    chargingSet["eight"] = true;
                                    currentMiles = parseInt(currentMiles) + 44;
                                    chargingHour + 1;
                                    if(currentMiles < destinationMiles) {
                                        chargingSet["nine"] = true;
                                        currentMiles = parseInt(currentMiles) + 44;
                                        chargingHour + 1;
                                        if(currentMiles < destinationMiles) {
                                            chargingSet["ten"] = true;
                                            currentMiles = parseInt(currentMiles) + 44;
                                            chargingHour + 1;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        chargingSet["charge"] = "No";
    }

    /*============== Checks charging time ============*/
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
    console.log(hours);
    var hoursNeeded = 0;
    if(hours == 7) {
        hoursNeeded + 1;
        if(hours < hoursNeeded)
            alert("The current Vehicle that you have entered doesn't have enough time to reach the miles needed for scheduled leave, Advise using another transport to reach destination.");
    } else if (hours == 8) {
        hoursNeeded + 1;
        if(hours < hoursNeeded)
            alert("The current Vehicle that you have entered doesn't have enough time to reach the miles needed for scheduled leave, Advise using another transport to reach destination.");
    } else if (hours == 9) {
        hoursNeeded + 2;
        if(hours < hoursNeeded)
            alert("The current Vehicle that you have entered doesn't have enough time to reach the miles needed for scheduled leave, Advise using another transport to reach destination.");
    } else if (hours == 10) {
        hoursNeeded + 3;
        if(hours < hoursNeeded)
            alert("The current Vehicle that you have entered doesn't have enough time to reach the miles needed for scheduled leave, Advise using another transport to reach destination.");
    } else if (hours == 11) {
        hoursNeeded + 4;
        if(hours < hoursNeeded)
            alert("The current Vehicle that you have entered doesn't have enough time to reach the miles needed for scheduled leave, Advise using another transport to reach destination.");
    } else if (hours == 12) {
        hoursNeeded + 5;
        if(hours < hoursNeeded)
            alert("The current Vehicle that you have entered doesn't have enough time to reach the miles needed for scheduled leave, Advise using another transport to reach destination.");
    } else if (hours == 1) {
        hoursNeeded + 6;
        if(hours < hoursNeeded)
            alert("The current Vehicle that you have entered doesn't have enough time to reach the miles needed for scheduled leave, Advise using another transport to reach destination.");
    } else if (hours == 2) {
        hoursNeeded + 7;
        if(hours < hoursNeeded)
            alert("The current Vehicle that you have entered doesn't have enough time to reach the miles needed for scheduled leave, Advise using another transport to reach destination.");
    } else if (hours == 3) {
        hoursNeeded + 8;
        if(hours < hoursNeeded)
            alert("The current Vehicle that you have entered doesn't have enough time to reach the miles needed for scheduled leave, Advise using another transport to reach destination.");
    } else if (hours == 4) {
        hoursNeeded + 9;
        if(hours < hoursNeeded)
            alert("The current Vehicle that you have entered doesn't have enough time to reach the miles needed for scheduled leave, Advise using another transport to reach destination.");
    } else {
        hoursNeeded + 10;
        if(hours < hoursNeeded)
            alert("The current Vehicle that you have entered doesn't have enough time to reach the miles needed for scheduled leave, Advise using another transport to reach destination.");
    };

    /*================================================*/

    return chargingSet;
}
/*================================================*/

/*================================================
 * Displays the table to the online user
 =================================================*/
 function reveal() {
    document.getElementById("revealTable").classList.remove("hide");   
}
/*================================================*/