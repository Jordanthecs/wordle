let guessButton = document.querySelector('.user-button');
let userGuess = document.querySelector('.user-text');
let count = 0;let row = 0;
let randWord;

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
    if(row >= 5){
        console.log('You lost');
    }else{
        for(let i = 0;i<5;i++){
            document.querySelector(`#m${row}-${i}`).value = userGuess.value.split('')[i];
            if(document.querySelector(`#m${row}-${i}`).value === wordToGuess[i]){
                document.querySelector(`#m${row}-${i}`).style.backgroundColor = 'green';
            }
            }
        }
        if(userGuess.value !== wordToGuess){
            console.log('L')
        }
        row++;
    
});