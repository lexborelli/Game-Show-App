const qwerty = document.querySelector("#qwerty");
const phase = document.querySelector("#phrase");
const btn__reset = document.querySelector(".btn__reset");
const overlay = document.querySelector("#overlay"); 

let missed = 0; 

//Attach an event listener to the “Start Game” button to hide the start screen overlay

btn__reset.addEventListener('click', () => {
    overlay.style.display = 'none'; 
});

//create an array named phrases & loop

const phrases = [
    'Easier said than done',
    'Lose your marbles',
    'Give it a shot',
    'Never in a million years',
    'keep your chin up',
    'That is the last straw'
]; 

//create a random phrase function
function getRandomPhraseAsArray(arr){
    const randomOne = phrases[Math.floor(Math.random()*phrases.length)]; 
    return randomOne.split(''); 
}

const addPhraseToDisplay(arr){
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        li.textContent = arr[i]; 
        phrases.appendChild('li');

        if (phrases[i] === ' ') {
            li.className.add('letter'); 
        } else {
            li.className.add('space'); 
        }
    }
}

const phraseArray = getRandomPhraseAsArray(phrases); 
addPhrasetoDisplay(phraseArray); 

//check letter function 
const checkLetter = (button) => {
    let li = document.querySelectorAll(".letter"); 
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