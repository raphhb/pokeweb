// Some functions were simplified to minimized the lines of code
document.addEventListener('DOMContentLoaded', function () {
    // Audio setup
    var audio = document.getElementById('audio');
    audio.volume = 0.7;

    // Button and element setup
    var playButton = document.getElementById('playButton');
    var playButton2 = document.getElementById('playButton2');
    var waterImage = document.getElementById('water');
    const instruction2 = document.getElementById('instruction2');
    const instruction5 = document.getElementById('instruction5');
    var loadingImage = document.getElementById('loadingImage');
    var pokewebIcon = document.getElementById('pokewebIcon');
    var logoLink = document.getElementById('logoLink');
    var clickCount = 0;
    var appearNotificationSound = new Audio('Extra-resources/appear-notification.mp3');
    // Event listener for playButton3
    var playButton3 = document.getElementById('playButton3');
    var playButton3Image = document.getElementById('playButton3Image');
    var playButton4 = document.getElementById('playButton4');
    var playButton4Image = document.getElementById('playButton4Image');
    const instruction6 = document.getElementById('instruction6');
    const instruction7 = document.getElementById('instruction7');


    playButton3.addEventListener('click', function () {

        // Set the source of the playButton3Image to "Extra-resources/own_details.png"
        playButton3Image.src = "Extra-resources/own_details.png";

        // Display the playButton3Image
        playButton3.classList.toggle('clicked');
        playButton3Image.classList.toggle('glow');
        // Toggle the display property
        if (playButton3Image.style.display === 'none') {
            playButton3Image.style.display = 'block';
            appearNotificationSound.play(); // Play the appear-notification audio
        } else {
            playButton3Image.style.display = 'none';
            appearNotificationSound.play(); // Play the appear-notification audio
        }
    });

    playButton4.addEventListener('click', function () {

        // Set the source of the playButton4Image to "Extra-resources/what-is-pokemon.png"
        playButton4Image.src = "Extra-resources/what-is-pokemon.png";

        // Display the playButton4Image
        playButton4.classList.toggle('clicked');
        playButton4Image.classList.toggle('glow');
        // Toggle the display property
        if (playButton4Image.style.display === 'none') {
            playButton4Image.style.display = 'block';
            appearNotificationSound.play(); // Play the appear-notification audio
        } else {
            playButton4Image.style.display = 'none';
            appearNotificationSound.play(); // Play the appear-notification audio
        }
    });

    // Helper function to handle Pokemon sound
    function handlePokemonSound(pokemonId, soundPath) {
        var pokemonImage = document.getElementById(pokemonId);
        var pokemonSound = new Audio(soundPath);

        pokemonImage.addEventListener('mouseenter', function () {
            pokemonSound.play();
        });

        pokemonImage.addEventListener('mouseleave', function () {
            pokemonSound.pause();
            pokemonSound.currentTime = 0;
        });
    }

    // Usage of handlePokemonSound function for each Pokemon
    [
        'squirtle', 'bulbasaur', 'charmander', 'snivy', 'tepig',
        'oshawott', 'turtwig', 'totodile', 'piplup', 'cyndaquil',
        'chikorita', 'chimchar'
    ].forEach(pokemon => {
        handlePokemonSound(pokemon, `Extra-resources/${pokemon}_sound.mp3`);
    });

    // Event listeners
    playButton.addEventListener('click', function () {
        audio.paused ? audio.play() : audio.pause();
        playButton.classList.toggle('clicked');
    });

    playButton2.addEventListener('click', function () {
        waterImage.style.display = waterImage.style.display === 'none' ? 'block' : 'none';
        playButton2.classList.toggle('clicked');
        appearNotificationSound.play(); // Play the appear-notification audio
    });

    [playButton, playButton2].forEach(button => {
        button.addEventListener('mouseenter', () => {
            button === playButton ? instruction2.style.display = 'block' : instruction5.style.display = 'block';
        });

        button.addEventListener('mouseleave', () => {
            button === playButton ? instruction2.style.display = 'none' : instruction5.style.display = 'none';
        });
    });

    [playButton3, playButton4].forEach(button => {
        button.addEventListener('mouseenter', () => {
            button === playButton3 ? instruction6.style.display = 'block' : instruction7.style.display = 'block';
        });

        button.addEventListener('mouseleave', () => {
            button === playButton3 ? instruction6.style.display = 'none' : instruction7.style.display = 'none';
        });
    });

    logoLink.addEventListener('click', function (event) {
        event.preventDefault();
        clickCount++;

        if (clickCount % 2 === 0) {
            loadingImage.style.display = loadingImage.style.display === 'none' ? 'block' : 'none';
            appearNotificationSound.play(); // Play the appear-notification audio
            if (loadingImage.style.display === 'none') {
                clickCount = 0;
            }
        }

        if (clickCount === 4) {
            pokewebIcon.style.display = 'block';
        }
    });

    // Page loading animation
    setTimeout(function () {
        document.body.classList.add("loaded");
    }, 1500);


});
