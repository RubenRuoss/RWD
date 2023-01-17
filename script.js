window.addEventListener('scroll', function () {
    var docHeight = document.documentElement.offsetHeight;
    var scrollPos = window.pageYOffset;
    var scrollPercent = scrollPos / (docHeight - window.innerHeight);

    if (scrollPercent > 0.4) {
        let imagespro = document.querySelectorAll('.pro .bounce-in-top img');
        let delaypro = 0;

        for (let i = 0; i < imagespro.length; i++) {
            let image = imagespro[i];
            setTimeout(function () {
                image.style.animationPlayState = 'running';
            }, delaypro);
            delaypro += 200; 
        }

        let imagesmax = document.querySelectorAll('.max .bounce-in-top img');
        let delaymax = 0;

        for (let i = 0; i < imagesmax.length; i++) {
            let image = imagesmax[i];
            setTimeout(function () {
                image.style.animationPlayState = 'running';
            }, delaymax);
            delaymax += 200;
        }

        let imagesultra = document.querySelectorAll('.ultra .bounce-in-top img')
        let delayultra = 0;

        for (let i = 0; i < imagesultra.length; i++) {
            let image = imagesultra[i];
            setTimeout(function () {
                image.style.animationPlayState = 'running';
            }, delayultra);
            delayultra += 200; 
        }
    }

});

function styleRunning(element) {
    element.style.animationPlayState = 'running';
}

function squeezeDiv() {
    var parent = document.querySelector('.skala');
    document.querySelector('.bounce-in-top').style.animationPlayState = 'running'
    document.querySelector('.ultra').style.animationPlayState = 'running'
    document.querySelector('.max').style.animationPlayState = 'running'
    document.querySelector('.bounce-in-left').style.animationPlayState = 'running'
    console.log("Hallo")
};

document.getElementById('intelVergleich').addEventListener('click', resize)

function resize() {
    let button = document.querySelector("#intelVergleich")
    let intelDiv = document.querySelector(".intelDiv");

    if (intelDiv.style.display == "block"){
        intelDiv.style.display = "none";
        button.innerHTML = "BESSER IS"
    }
    else {
        intelDiv.style.display = "block";
        button.innerHTML = "MERKST SELBER"
    }
};