const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkNumber = document.querySelector('#check-number');
const outputBox= document.querySelector('#output-box');

function checkNumberIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum && dob){
        compareValues(sum, luckyNumber);
    }else{
        outputBox.innerText = "Please enter both the fields 😈"
    }
    
}

function calculateSum(dob) {
    dob = dob.replaceAll('-', ' ');
    let sum = 0;
    for(let i=0; i<dob.length; i++) {
        sum = sum + Number (dob.charAt(i));
    }

    return sum; 
}

function compareValues(sum, luckyNumber){
    if(sum % luckyNumber.value === 0){
       outputBox.innerText =  "Your Birthday is lucky 🚀🚀";
    }else{
       outputBox.innerText = "Your Birthday is  not lucky 🙁";
    }
    console.log(sum, luckyNumber.value);
}

checkNumber.addEventListener('click', checkNumberIsLucky);

