const parallaxDiv = document.querySelector(".text_start");

//funcoes

function backParallax() {
    let yposition = window.scrollY;
    parallaxDiv.style.backgroundPositionY = `${yposition * -0.21}px`;
}

//eventos

window.addEventListener('scroll', backParallax);
