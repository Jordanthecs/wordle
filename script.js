let guessButton = document.querySelector('.user-button');
let userGuess = document.querySelector('.user-text');
let table = document.querySelector('.message');
let row = 0;
let randWord;
let count = 1;

function readTextFile(file){
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function (){
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status == 0){
                let data = rawFile.responseText;
                randWord = data.split("\n");
                console.log(randWord);
            }
        }
    }
    rawFile.send(null);
}
readTextFile("five-letter.txt");

let wordToGuess = randWord[Math.floor(Math.random() * 5758)];
console.log(wordToGuess);

guessButton.addEventListener('click',function(){
    count++;
    if(row >= 5){
        setTimeout(function(){
            if(userGuess.value !== wordToGuess){
                alert('YOU LOSE!');
            }else{
                alert('YOU WIN!');
            }
            userGuess.value = '';
        },500);
    }else{
        for(let i = 0;i<5;i++){
            if(document.querySelector(`#m${row}-${i}`).style.backgroundColor !== 'green' || document.querySelector(`#m${row}-${i}`).style.backgroundColor !== 'yellow'){
                document.querySelector(`#m${row}-${i}`).style.backgroundColor = 'grey';
                document.querySelector(`#m${row}-${i}`).style.color = 'white';
            }
        }
        for(let i = 0;i<5;i++){
            document.querySelector(`#m${row}-${i}`).value = userGuess.value.split('')[i];
            if(document.querySelector(`#m${row}-${i}`).value === wordToGuess[i]){
                document.querySelector(`#m${row}-${i}`).style.backgroundColor = 'green';
                document.querySelector(`#m${row}-${i}`).style.color = 'white';
            }
        }for(let i = 0;i<5;i++){
            for(let j = 0;j<5;j++){
                    if(document.querySelector(`#m${row}-${i}`).style.backgroundColor !== 'green'){
                        if(document.querySelector(`#m${row}-${i}`).value === wordToGuess[j] && document.querySelector(`#m${row}-${j}`).style.backgroundColor !== 'green'){
                            document.querySelector(`#m${row}-${i}`).style.backgroundColor = 'yellow';
                            document.querySelector(`#m${row}-${i}`).style.color = 'black';
                        }
                    }
                }
            }
        if(userGuess.value === wordToGuess){
            setTimeout(function(){
            alert('YOU WIN!');
            userGuess.value = '';
        },500);
        for(let i = 0;i<5;i++){
            for(let j = 0;j<5;j++){
                    document.querySelector(`#m${i}-${j}`).value = '';
                }
            }
        }
    userGuess.value = '';
    row++;
    }
    
});