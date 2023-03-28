const qwerty = document.querySelector("#qwerty");
const phase = document.querySelector("#phrase");
const btn_reset = document.querySelector(".btn_reset");
const overlay = document.querySelector("#overlay"); 

let missed = 0; 

//Attach an event listener to the “Start Game” button to hide the start screen overlay

btn_reset.addEventListener ('click', () => {
    overlay.style.display = 'none'; 
});

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

//check letter function 
const checkLetter= (button) => {
    let li = document.getElementsByClassName("letter"); 
    let noMatch = null; 
    for (let i = 0; i < checkLetter.length; i++) {
        if(button.textContent === li[i].textContent.toLowerCase()) {
            li[i].classList.add("show"); 
            noMatch = li[i].textContent;
        }
    }
    return noMatch; 
}

qwerty.addEventListener ('click', (e)=> {
    if (e.target.tagName === "BUTTON") {
        e.target.classList.add("chosen"); 
        e.target.disabled = true; 

        
    }
})