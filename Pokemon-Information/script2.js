function revealContent(coverPic) {
    var content = coverPic.nextElementSibling.nextElementSibling; 
    var label = coverPic.nextElementSibling;

    // Hide the clicked cover-pic and label with a fade effect
    coverPic.style.opacity = '0';
    label.style.opacity = '0';

    // Play the disappearing effect audio
    document.getElementById('disappearingEffectAudio').play();

    // Set a timeout to hide the cover-pic and label after the fade effect
    setTimeout(function () {
        coverPic.style.display = 'none';
        label.style.display = 'none';
    }, 1800); // Adjust the duration 

    content.classList.add('visible');
}

function showInfo(pokemon) {
    document.getElementById(`${pokemon}-info`).style.display = 'block';
}

function hideInfo(pokemon) {
    document.getElementById(`${pokemon}-info`).style.display = 'none';
}