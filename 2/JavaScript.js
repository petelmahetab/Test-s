//  1. Multiplication Table (5 marks):
//  Write a JavaScript function that takes a number as input and 
// // displays the multiplication table for that number (up to 10) ;

// select button
const getBtn=document.querySelector('#press');
getBtn.addEventListener('click',function(){
    // Get value as input
    const getNumber=document.querySelector('#integer').value; 
    const printTable=document.querySelector('.table');  
    //Now we have reset if any previous result
    printTable.innerHTML='';
    //If User will not be enterd number
    if(getNumber=== ''){
        printTable.innerHTML='<b>Please Enter any INTEGER</b>';
        return;
        // it will stop because if no input then no fact return an table
    }

    // Print table
    let tab='<b>Here is your Table for => ' + getNumber + '</b><br>';
    // loop for iterating to 10
    for(let i=1;i<=10;i++){
        // it return user number and multiplication of that number and lastly Break
        tab+=getNumber+'*'+i+'='+(getNumber*i)+'<br>';
    }
// Now display on UI using 
printTable.style.margin='4px';
     printTable.innerHTML=tab;
})


// Celsius to Fahrenheit Converter (5 marks):
// Write a JavaScript function that takes input for a temperature in 
// Celsius from the user and converts it into Fahrenheit using the 
// formula: Fahrenheit=(Celsius×9/5)+32