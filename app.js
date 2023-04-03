    const qwerty = document.getElementById("#qwerty");

    const phrase = document.querySelector("#phrase");

    const btn__reset = document.querySelectorAll(".btn__reset");

    const overlay = document.querySelector("#overlay"); 

    const letter = document.querySelectorAll(".letter");

    let missed = 0; 

    //Attach an event listener to the “Start Game” button to hide the start screen overlay

   btn__reset.addEventListener('click', () => {
        document.getElementById('overlay').style.display = 'none'; 

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
        let phrase = phrases[Math.floor(Math.random()*phrases.length)]; 
        randomOne = randomOne.split(''); 
        return randomeOne;
    };

    function addPhraseToDisplay(arr){
        for (let i = 0; i < arr.length; i++) {
            const newLi = document.createElement('li');
            newLi.textContent = arr[i]; 
            phrase.appendChild('newLi');

            if (phrases[i] !== ' ') {
                newLi.classList.add('letter'); 
            } else {
                newLi.classList.add('space'); 
            };
        };
    };

    const phraseArray = getRandomPhraseAsArray(phrases); 
    addPhraseToDisplay(phraseArray); 

    //check letter function 
    const checkLetter(button) => { 
        let noMatch = null; 
        for (let i = 0; i < letter.length; i++) {
            if(button.textContent === letter[i].textContent.toLowerCase()) {
                noMatch = letter[i];
                noMatch.classList.add('show');
            }
        }
        return noMatch; 
    };

    qwerty.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            e.target.classList.add('chosen'); 
            e.target.setAttribute('disabled', true); 

            let letterFound = checkLetter(qwerty);
                if (letterFound = null) {
                let attempts = document.querySelector('.tries img');
                let letterFound = checkLetter(e.target);

                if(letterFound === null)
                }
        }
    });