/*=======================================================================================
* Generates a Table Function in a spesific Area & Gathers Information from localstorage
=======================================================================================*/

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

/*==============================================================================*/



/*==============================================================================*/

/*========================== Data Checking Area ===============================*/
if (car1 == null) { /* Checks that Array is "real" if not then create array for function to use */
  car1 = ["", "", "", "", "", "", "", "","","","",""];
}
if (car2 == null) {
  car2 = ["", "", "", "", "", "", "", "","","","",""];
}
if (car3 == null) {
  car3 = ["", "", "", "", "", "", "", "","","","",""];
}
if (car4 == null) {
  car4 = ["", "", "", "", "", "", "", "","","","",""];
}
if (car5 == null) {
  car5 = ["", "", "", "", "", "", "", "","","","",""];
}
if (car6 == null) {
  car6 = ["", "", "", "", "", "", "", "","","","",""];
}


if (car1[6] == true) { /* Identifies if the electric car needs a charge */
    charge1 = "Requires Charge";
} else {
    charge1 = "Doesn't Requires Charge";
}

if (car2[6] == true) {
  charge2 = "Requires Charge";
} else {
  charge2 = "Doesn't Requires Charge";
}

if (car3[6] == true) {
  charge3 = "Requires Charge";
} else {
  charge3 = "Doesn't Requires Charge";
}
if (car4[6] == true) {
  charge4 = "Requires Charge";
} else {
  charge4 = "Doesn't Requires Charge";
}
if (car5[6] == true) {
  charge5 = "Requires Charge";
} else {
  charge5 = "Doesn't Requires Charge";
}
if (car6[6] == true) {
  charge6 = "Requires Charge";
} else {
  charge6 = "Doesn't Requires Charge";
}
/*=============================================================================*/

/*========================== Program Adapting 1 ===============================*/
if (car1[6] == true) {
  if (car1[7] < car1[8]) { /* Checks that Car has reached its maximum miliage, if not register for charge */
      document.getElementById("reg1").style.backgroundColor = "green";
      car1[7] = car1[7] + 44; /* Once executed it adds 44 miles to current miles, as 1 hours charge = 44 miles added on */
      if (car1[7] < car1[8]) {
        document.getElementById("reg2").style.backgroundColor = "green";
        car1[7] = car1[7] + 44;
        if (car1[7] < car1[8]) {
          document.getElementById("reg3").style.backgroundColor = "green";
          car1[7] = car1[7] + 44;
          if (car1[7] < car1[8]) {
            document.getElementById("reg4").style.backgroundColor = "green";
            car1[7] = car1[7] + 44;
            if (car1[7] < car1[8]) {
              document.getElementById("reg5").style.backgroundColor = "green";
              car1[7] = car1[7] + 44;
              if (car1[7] < car1[8]) {
                document.getElementById("reg6").style.backgroundColor = "green";
                car1[7] = car1[7] + 44;
                if (car1[7] < car1[8]) {
                  document.getElementById("reg7").style.backgroundColor = "green";
                  car1[7] = car1[7] + 44;
                  if (car1[7] < car1[8]) {
                    document.getElementById("reg8").style.backgroundColor = "green";
                    car1[7] = car1[7] + 44;
                    if (car1[7] < car1[8]) {
                      document.getElementById("reg9").style.backgroundColor = "green";
                      car1[7] = car1[7] + 44;
                      if (car1[7] < car1[8]) {
                        document.getElementById("reg10").style.backgroundColor = "green";
                        car1[7] = car1[7] + 44;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
  }
}
/*=============================================================================*/

/*========================== Program Adapting 2 ===============================*/
if (car2[6] == true) {
  if (car2[7] < car2[8]) { /* Checks that Car has reached its maximum miliage, if not register for charge */
      document.getElementById("reg11").style.backgroundColor = "green";
      car2[7] = car2[7] + 44; /* Once executed it adds 44 miles to current miles, as 1 hours charge = 44 miles added on */
      if (car2[7] < car2[8]) {
        document.getElementById("reg12").style.backgroundColor = "green";
        car2[7] = car2[7] + 44;
        if (car2[7] < car2[8]) {
          document.getElementById("reg13").style.backgroundColor = "green";
          car2[7] = car2[7] + 44;
          if (car2[7] < car2[8]) {
            document.getElementById("reg14").style.backgroundColor = "green";
            car2[7] = car2[7] + 44;
            if (car2[7] < car2[8]) {
              document.getElementById("reg15").style.backgroundColor = "green";
              car2[7] = car2[7] + 44;
              if (car2[7] < car2[8]) {
                document.getElementById("reg16").style.backgroundColor = "green";
                car2[7] = car2[7] + 44;
                if (car2[7] < car2[8]) {
                  document.getElementById("reg17").style.backgroundColor = "green";
                  car2[7] = car2[7] + 44;
                  if (car2[7] < car2[8]) {
                    document.getElementById("reg18").style.backgroundColor = "green";
                    car2[7] = car2[7] + 44;
                    if (car2[7] < car2[8]) {
                      document.getElementById("reg19").style.backgroundColor = "green";
                      car2[7] = car2[7] + 44;
                      if (car2[7] < car2[8]) {
                        document.getElementById("reg20").style.backgroundColor = "green";
                        car2[7] = car2[7] + 44;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
  }
}
/*=============================================================================*/

/*========================== Program Adapting 3 ===============================*/
if (car3[6] == true) {
  if (car3[7] < car3[8]) { /* Checks that Car has reached its maximum miliage, if not register for charge */
      document.getElementById("reg21").style.backgroundColor = "green";
      car3[7] = car3[7] + 44; /* Once executed it adds 44 miles to current miles, as 1 hours charge = 44 miles added on */
      if (car3[7] < car3[8]) {
        document.getElementById("reg22").style.backgroundColor = "green";
        car3[7] = car3[7] + 44;
        if (car3[7] < car3[8]) {
          document.getElementById("reg23").style.backgroundColor = "green";
          car3[7] = car3[7] + 44;
          if (car3[7] < car3[8]) {
            document.getElementById("reg24").style.backgroundColor = "green";
            car3[7] = car3[7] + 44;
            if (car3[7] < car3[8]) {
              document.getElementById("reg25").style.backgroundColor = "green";
              car3[7] = car3[7] + 44;
              if (car3[7] < car3[8]) {
                document.getElementById("reg26").style.backgroundColor = "green";
                car3[7] = car3[7] + 44;
                if (car3[7] < car3[8]) {
                  document.getElementById("reg27").style.backgroundColor = "green";
                  car3[7] = car3[7] + 44;
                  if (car3[7] < car3[8]) {
                    document.getElementById("reg28").style.backgroundColor = "green";
                    car3[7] = car3[7] + 44;
                    if (car3[7] < car3[8]) {
                      document.getElementById("reg29").style.backgroundColor = "green";
                      car3[7] = car3[7] + 44;
                      if (car3[7] < car3[8]) {
                        document.getElementById("reg30").style.backgroundColor = "green";
                        car3[7] = car3[7] + 44;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
  }
}
/*=============================================================================*/

/*========================== Program Adapting 4 ===============================*/
if (car4[6] == true) {
  if (car4[7] < car4[8]) { /* Checks that Car has reached its maximum miliage, if not register for charge */
      document.getElementById("reg31").style.backgroundColor = "green";
      car4[7] = car4[7] + 44; /* Once executed it adds 44 miles to current miles, as 1 hours charge = 44 miles added on */
      if (car4[7] < car4[8]) {
        document.getElementById("reg32").style.backgroundColor = "green";
        car4[7] = car4[7] + 44;
        if (car4[7] < car4[8]) {
          document.getElementById("reg33").style.backgroundColor = "green";
          car4[7] = car4[7] + 44;
          if (car4[7] < car4[8]) {
            document.getElementById("reg34").style.backgroundColor = "green";
            car4[7] = car4[7] + 44;
            if (car4[7] < car4[8]) {
              document.getElementById("reg35").style.backgroundColor = "green";
              car4[7] = car4[7] + 44;
              if (car4[7] < car4[8]) {
                document.getElementById("reg36").style.backgroundColor = "green";
                car4[7] = car4[7] + 44;
                if (car4[7] < car4[8]) {
                  document.getElementById("reg37").style.backgroundColor = "green";
                  car4[7] = car4[7] + 44;
                  if (car4[7] < car4[8]) {
                    document.getElementById("reg38").style.backgroundColor = "green";
                    car4[7] = car4[7] + 44;
                    if (car4[7] < car4[8]) {
                      document.getElementById("reg39").style.backgroundColor = "green";
                      car4[7] = car4[7] + 44;
                      if (car4[7] < car4[8]) {
                        document.getElementById("reg40").style.backgroundColor = "green";
                        car4[7] = car4[7] + 44;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
  }
}
/*=============================================================================*/

/*========================== Program Adapting 5 ===============================*/
if (car5[6] == true) {
  if (car5[7] < car5[8]) { /* Checks that Car has reached its maximum miliage, if not register for charge */
      document.getElementById("reg41").style.backgroundColor = "green";
      car5[7] = car5[7] + 44; /* Once executed it adds 44 miles to current miles, as 1 hours charge = 44 miles added on */
      if (car5[7] < car5[8]) {
        document.getElementById("reg42").style.backgroundColor = "green";
        car5[7] = car5[7] + 44;
        if (car5[7] < car5[8]) {
          document.getElementById("reg43").style.backgroundColor = "green";
          car5[7] = car5[7] + 44;
          if (car5[7] < car5[8]) {
            document.getElementById("reg44").style.backgroundColor = "green";
            car5[7] = car5[7] + 44;
            if (car5[7] < car5[8]) {
              document.getElementById("reg45").style.backgroundColor = "green";
              car5[7] = car5[7] + 44;
              if (car5[7] < car5[8]) {
                document.getElementById("reg46").style.backgroundColor = "green";
                car5[7] = car5[7] + 44;
                if (car5[7] < car5[8]) {
                  document.getElementById("reg47").style.backgroundColor = "green";
                  car5[7] = car5[7] + 44;
                  if (car5[7] < car5[8]) {
                    document.getElementById("reg48").style.backgroundColor = "green";
                    car5[7] = car5[7] + 44;
                    if (car5[7] < car5[8]) {
                      document.getElementById("reg49").style.backgroundColor = "green";
                      car5[7] = car5[7] + 44;
                      if (car5[7] < car5[8]) {
                        document.getElementById("reg50").style.backgroundColor = "green";
                        car5[7] = car5[7] + 44;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
  }
}
/*=============================================================================*/

/*========================== Program Adapting 6 ===============================*/
if (car6[6] == true) {
  if (car6[7] < car6[8]) { /* Checks that Car has reached its maximum miliage, if not register for charge */
      document.getElementById("reg51").style.backgroundColor = "green";
      car6[7] = car6[7] + 44; /* Once executed it adds 44 miles to current miles, as 1 hours charge = 44 miles added on */
      if (car6[7] < car6[8]) {
        document.getElementById("reg52").style.backgroundColor = "green";
        car6[7] = car6[7] + 44;
        if (car6[7] < car6[8]) {
          document.getElementById("reg53").style.backgroundColor = "green";
          car6[7] = car6[7] + 44;
          if (car6[7] < car6[8]) {
            document.getElementById("reg54").style.backgroundColor = "green";
            car6[7] = car6[7] + 44;
            if (car6[7] < car6[8]) {
              document.getElementById("reg55").style.backgroundColor = "green";
              car6[7] = car6[7] + 44;
              if (car6[7] < car6[8]) {
                document.getElementById("reg56").style.backgroundColor = "green";
                car6[7] = car6[7] + 44;
                if (car6[7] < car6[8]) {
                  document.getElementById("reg57").style.backgroundColor = "green";
                  car6[7] = car6[7] + 44;
                  if (car6[7] < car6[8]) {
                    document.getElementById("reg58").style.backgroundColor = "green";
                    car6[7] = car6[7] + 44;
                    if (car6[7] < car6[8]) {
                      document.getElementById("reg59").style.backgroundColor = "green";
                      car6[7] = car6[7] + 44;
                      if (car6[7] < car6[8]) {
                        document.getElementById("reg60").style.backgroundColor = "green";
                        car6[7] = car6[7] + 44;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
  }
}
/*=============================================================================*/

let array = [
    [car1[0],charge1,"","","","","","","","","",""],
    [car2[0],charge2,"","","","","","","","","",""],
    [car3[0],charge3,"","","","","","","","","",""],
    [car4[0],charge4,"","","","","","","","","",""],
    [car5[0],charge5,"","","","","","","","","",""],
    [car6[0],charge6,"","","","","","","","","",""]
];

tables = document.getElementById("tables");

for(var i = 1; i < tables.rows.length; i++) /* Creates the Rows stored in each Array */
    {
        /* Creates the Cells/ length required for the data stored in the Array */
        for(var j = 0; j < tables.rows[i].cells.length; j++)
        {
            tables.rows[i].cells[j].innerHTML = array[i - 1][j];
        }
    }

 /*=============================================================================*/ 