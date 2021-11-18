  //--Get the values from the user (controller function)--//
 function getValues(){
    //--Get values from the page--//
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    let arraySize = document.getElementById("arraySize").value;
    //--Ensure values are integers (input validation)--//
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    arraySize = parseInt(arraySize);
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && Number.isInteger(arraySize)){
        //--Call fizzBuzz function--//
        let fbArray = fizzBuzz(fizzValue, buzzValue, arraySize);
        //--Call displayNumbers function--//
        displayNumbers(fbArray);
    }else{
        alert("You must enter integers");
    }
}

  //--Get the values from the user (controller function)--//
  function getValuesB(){
    //--Get values from the page--//
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    let arraySize = document.getElementById("arraySize").value;
    //--Ensure values are integers (input validation)--//
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    arraySize = parseInt(arraySize);
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && Number.isInteger(arraySize)){
        //--Call fizzBuzz function--//
        let fbArray = fizzBuzzB(fizzValue, buzzValue, arraySize);
        //--Call displayNumbers function--//
        displayNumbers(fbArray);
    }else{
        alert("You must enter integers");
    }
}

  //--Get the values from the user (controller function)--//
  function getValuesC(){
    //--Get values from the page--//
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    let arraySize = document.getElementById("arraySize").value;
    //--Ensure values are integers (input validation)--//
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    arraySize = parseInt(arraySize);
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && Number.isInteger(arraySize)){
        //--Call fizzBuzz function--//
        let fbArray = fizzBuzzC(fizzValue, buzzValue, arraySize);
        //--Call displayNumbers function--//
        displayNumbers(fbArray);
    }else{
        alert("You must enter integers");
    }
}

//--Option A: Evaluate function using input values (logic function)--//
function fizzBuzz(fizzValue, buzzValue, arraySize){
    var startTime = performance.now();
    let returnArray = [];
    //--Get all numbers from 0 to arraySize--//
    for(let i = 1; i <= arraySize; i++){
         //--Check if number is Fizz/Buzz/FizzBuzz--//
        if((i % fizzValue == 0) && (i % buzzValue == 0)){
            returnArray.push('FizzBuzz');
        }else if(i % fizzValue == 0){
            returnArray.push('Fizz');
        }else if(i % buzzValue == 0){
            returnArray.push('Buzz');
        }else{
            returnArray.push(i);
        }
    }
    var endTime = performance.now();
    var totalTime = endTime - startTime;
    //--Select and populate the timing section from the page--//
    let functionTime = document.getElementById("timeHeader");
    functionTime.innerHTML = "Results: Option A took " + `${totalTime}` + " milliseconds.";
    return returnArray;
}

//--Option B: Alternate solution without if/else statements (logic function)--//
function fizzBuzzB(fizzValue, buzzValue, arraySize){
    var startTime = performance.now();
    let returnArray = [];
    //--Set default boolean logic for Fizz and Buzz--//
    let Fizz = false;
    let Buzz = false;
    //--Loop through values, comparing to inputs--//
    for(let i = 1; i <= arraySize; i++){
        Fizz = i % fizzValue == 0;
        Buzz = i % buzzValue == 0;
        //--Switch false to true if requirements are met--//
        switch(true){
            case Fizz && Buzz:{
                returnArray.push("FizzBuzz");
                break;
            }case Fizz:{
                returnArray.push("Fizz");
                break;
            }case Buzz:{
                returnArray.push("Buzz");
                break;
            }default:{
                returnArray.push(i);
                break;
            }
        }
    }
    var endTime = performance.now();
    var totalTime = endTime - startTime;
    //--Select and populate the timing section from the page--//
    let functionTime = document.getElementById("timeHeader");
    functionTime.innerHTML = "Results: Option B took " + `${totalTime}` + " milliseconds.";
    return returnArray;
}

//--Option C: Alternate solution without using '%' modulus operator (logic function)--//
function fizzBuzzC(fizzValue, buzzValue, arraySize){
    var startTime = performance.now();
    let returnArray = [];
    //--Set initial Fizz and Buzz values--//
    let Fizz = 1;
    let Buzz = 1;
    //--Get all numbers from 0 to arraySize while incrementing Fizz and Buzz--//
    for(let i = 1; i <= arraySize; i++, Fizz++, Buzz++){
        //--Check if number is Fizz/Buzz/FizzBuzz, then reset incrementation--//
       if((Fizz == fizzValue) && (Buzz == buzzValue)){
           returnArray.push('FizzBuzz');
           Fizz = 0;
           Buzz = 0;
       }else if(Fizz == fizzValue){
           returnArray.push('Fizz');
           Fizz = 0;
       }else if(Buzz == buzzValue){
           returnArray.push('Buzz');
           Buzz = 0;
       }else{
           returnArray.push(i);
       }
    }
    var endTime = performance.now();
    var totalTime = endTime - startTime;
    //--Select and populate the timing section from the page--//
    let functionTime = document.getElementById("timeHeader");
    functionTime.innerHTML = "Results: Option C took " + `${totalTime}` + " milliseconds.";
    return returnArray;
}

//--Display the resulting Fizz/Buzz/FizzBuzz (display function)--//
function displayNumbers(fbArray){
    //--Get the table body element from the page--//
    let tableBody = document.getElementById("results");
    //--Get the template row--//
    let templateRow = document.getElementById("fbTemplate");
    //--Clear the table and add 5 rows to the template--//
    tableBody.innerHTML = "";
    for (let index = 0; index < fbArray.length; index += 5) {  
        let tableRow = document.importNode(templateRow.content, true);
        //--Determine number of columns to display, insert formatted data--//
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];
        rowCols[1].classList.add(fbArray[index+1]);
        rowCols[1].textContent = fbArray[index+1];
        rowCols[2].classList.add(fbArray[index+2]);
        rowCols[2].textContent = fbArray[index+2];
        rowCols[3].classList.add(fbArray[index+3]);
        rowCols[3].textContent = fbArray[index+3];
        rowCols[4].classList.add(fbArray[index+4]);
        rowCols[4].textContent = fbArray[index+4];
        tableBody.appendChild(tableRow);
    }
}