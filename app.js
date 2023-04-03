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

 