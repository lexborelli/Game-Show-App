const qwerty = document.getElementById('qwerty');
const phase = document.getElementById('phrase');
const resetButton = document.getElementsByClassName('.btn_reset');


let missed = 0; 

//create an array named phrases & loop

const phrase = ['Easier said than done' , 'Lose your marbles' , 'Give it a shot' , 'Never in a million years' , 'keep your chin up' , 'That is the last straw']; 

//create a random phrase function
function getRandomPhraseAsArray(arr) {
    const randomOne = Math.floor(Math.random() * arr.length); 
    return arr[randomOne].split (''); 
}

const randomPhrase = getRandomPhraseAsArray(phrases); 

function addPhraseToDisplay(arr) {
    for(let i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        li.textContent = arr[i]; 
        if(arr[i] === ' ') {
            li.className = 'space'; 
        } else {
            li.className = 'letter'; 
        }
        phrase.append(li);
    }
}

const phraseArray = getRandomPhraseAsArray(phrases); 
addPhrasetoDisplay(phraseArray); 

