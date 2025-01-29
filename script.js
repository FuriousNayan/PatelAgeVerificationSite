const myText = document.getElementById('inputID');
const mySubmit = document.getElementById('buttonID');
const myResult = document.getElementById('resultID');

let age;

mySubmit.onclick = function () {
    age = myText.value;
    age = Number(age);

    if ( age >= 1 && age < 18){
        myResult.textContent = 'You are under the age of 18, therefore you are a minor.'
    }

    else if (age >= 18 && age <= 30){
        myResult.textContent = 'You are over the age of 18 but less than 30, therefore you are an adult.'
    }

    else if (age > 30 && age <= 65){
        myResult.textContent = 'You are over the age of 30 but less than 65, therefore you are an unc.'
    }

    else if (age > 65 && age <= 100){
        myResult.textContent = 'You are over the age of 65, therefore you are a senior citizen.'
    }

    else{
        myResult.textContent = 'You are either not born, or WAY too old'
    }
}