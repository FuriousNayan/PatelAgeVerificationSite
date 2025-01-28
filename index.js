const inputID = document.getElementById('inputID')
const buttonID = document.getElementById('buttonID')
const result = document.getElementById('result')

let age;

buttonID.onclick = function(){
    age = inputID.value;
    age = Number(age);

    if (age > 100){
        result.textContent = "You are a senior citizen";
    }


}

