//  1. Multiplication Table (5 marks):
//  Write a JavaScript function that takes a number as input and 
// // displays the multiplication table for that number (up to 10) ;

//  =>
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

     printTable.innerHTML=tab;
})


// Celsius to Fahrenheit Converter (5 marks):
// Write a JavaScript function that takes input for a temperature in 
// Celsius from the user and converts it into Fahrenheit using the 
// formula: Fahrenheit=(Celsius×9/5)+32
 
// =>
// select Button
const convert=document.querySelector('#Fah');
convert.addEventListener('click',function(){
    // Now Get Input (value ) property which get actual value entered by User
    const getCelsius=document.querySelector('#celsius').value;
    const returnFahrenheit=document.querySelector('#Fahrenheit');
    //starting will assign empty string.
    returnFahrenheit.innerHTML='';

    //User not Enterd any Celsius value
    if(getCelsius=== ''){
        returnFahrenheit.innerHTML='Please Fill there Celsius.';
        return ;
    }
    // Convert
    let formula='After Conversion <br><br>'+getCelsius+'  °C =>  ';

    formula+=(getCelsius*9/5)+32;

    returnFahrenheit.innerHTML=formula+'°F';
    
})





// 3. Positive or Negative Number Checker (5 marks):
// Write a JavaScript function that takes a number as input and 
// displays whether the number is positive or negative.
// 

// =>
// select button
const but=document.querySelector('#checking');
but.addEventListener('click',function(){
    // get input value
    const UserValue=document.querySelector('#value').value;
    const Checker=document.querySelector('#result');
  
    // if no input entered then
    if(UserValue=== ''){
        Checker.innerHTML='Plese Enter number for checking.';
        return;
    }

    // Now check we know greater 0 then + or -
    const num=parseFloat(UserValue); 
    //this for converting Given user into NUMBER
    if(num > 0){
Checker.innerHTML='Your '+num+'  is Positive. Because it is Greater than 0.';
    }
    // 0 nor be (+) neither (-)
    else if(num < 0)
    {
Checker.innerHTML='Your '+num+' is Negative. Because it Lesser than 0. ';
    }
    else{
        Checker.innerHTML='Your '+num+'  Will be 0. it neither be POSITIVE nor NEGATIVE';
    }
    
})