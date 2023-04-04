    const qwerty = document.querySelector("#qwerty");

    const phrase = document.querySelector("#phrase ul");

    const resetButton = document.querySelectorAll(".btn__reset");

    const overlay = document.querySelector("#overlay"); 

    let missed = 0; 

    //Attach an event listener to the “Start Game” button to hide the start screen overlay

   resetButton.addEventListener('click', () => {
           overlay.style.display = 'none';

       });

    // An array of phrases to choose from

    const phrases = [
        'Easier said than done',
        'Lose your marbles',
        'Give it a shot',
        'Never in a million years',
        'keep your chin up',
        'That is the last straw'
    ]; 

    // Returns a random phrase from the phrases array as an array of characters
    function getRandomPhraseAsArray (arr) {
        const randomOne = Math.floor(Math.random() * arr.length);
        return arr [randomOne].split('');  
    }

    const phraseArray = getRandomPhraseAsArray(phrases);

    function addPhraseToDisplay (arr) {
        for (let i = 0; i < arr.length; i++) {
            const liList = document.createElement('liList'); 
            liList.textContent = arr[i]; 
            phrase.appendChild(li); 
            if (li.textContent !== ' ') {
                li.className = 'letter';
            } else {
                li.className = 'letter';
            }
        }
    }

    addPhraseToDisplay(phraseArray); 

//check for letter 
