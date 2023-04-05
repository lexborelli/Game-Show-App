    const qwerty = document.querySelector("#qwerty");

    const phrase = document.querySelector("#phrase");

    const resetButton = document.querySelector(".btn__reset");

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
            phrase.appendChild(liList); 
            if (arr[i] !== ' ') {
                liList.className = 'letter';
            } else {
                liList.className = 'space';
            }
        }
    };

    addPhraseToDisplay(phraseArray); 

//check for letter 
    function checkLetter(button) {
        let match = null;
        const letter = document.querySelectorAll('.letter');
            for (i = 0; i < letter.length; i ++) {
                if (letter[i].textContent.toLowerCase() === button.textContent) {
                    match = letter[i]; 
                    match.classList.add('show'); 
                }   
                }
                return match; 
            };

            
    qwerty.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON') {
            e.target.classList.add('chosen'); 
            e.target.disabled = true;

            const letterFound = checkLetter(e.target); 
            if(letterFound === null) {
                const hearts = document.querySelectorAll('.tries img');
                    hearts[missed].src = 'images/lostHeart.png'; 
                    missed++;
             }
            }
            checkWin(); 
         });

         function checkWin() {
            const letterLi = document.querySelectorAll('.letter');
            const show = document.querySelectorAll('.show'); 
            const titleMessage = document.querySelector('.title');
                
                if(letterLi.length === show.length) {
                    overlay.classList.add('win'); 
                    titleMessage.textContent = "You're a Winner!"; 
                    overlay.style.display = 'flex';
            } else if(missed < 4) {
                overlay.classList.add('lose'); 
                titleMessage.textContent = "Oh no, You've lost!";
                overlay.style.display = 'flex'; 
            }
        };
       
    