const slides = [
    "./img/01.jpg",
    "./img/02.jpg",
    "./img/03.jpg",
    "./img/04.jpg",
    "./img/05.jpg"
];

const slideElements = [];
let indexAct = 0;

const wrapperElement = document.querySelector('.carousel-wrapper');

for (let i = 0; i < slides.length; i++) {

    const src = slides[i];

    const li = document.createElement('li');
    
    li.className = 'slide';

    
    if (i === indexAct) {
        li.classList.add('active');
    }

    
    const img = document.createElement('img');
    
    img.src = src;

    li.append(img);
    console.log(li);

    wrapperElement.append(li);

    slideElements.push(li);
}

const nextButton = document.querySelector('.arrow-next');

nextButton.addEventListener('click', function () {
    
    slideElements[indexAct].classList.remove('active');
    
    if (indexAct === slideElements.length - 1) {
        indexAct = 0;
        slideElements[indexAct].classList.add('active');
    } else {
        slideElements[++indexAct].classList.add('active');
    }
})