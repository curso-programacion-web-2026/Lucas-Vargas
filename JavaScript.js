
const titulo = document.getElementById("titulo");
const botonC = document.getElementById("botonCambiar");

let contador = 0;
botonC.addEventListener("click",function(){
    contador++;
    if (contador===1){
        titulo.textContent="!Bienvenidos¡";
    } else if (contador===2){
        titulo.textContent="!Espero que disfruten mi pagina¡";
    } else if (contador===3){
        titulo.textContent="!Gracias por visitarla¡";
    }
});
const texto= document.getElementById("superMario");
const disminuir= document.getElementById("disminuir");
const normal= document.getElementById("normal");
const  aumentar= document.getElementById("aumentar");
let tamaño= 15;
aumentar.addEventListener("click",function(){
    if (tamaño<30){
        tamaño= tamaño +2;
        texto.style.fontSize= tamaño + "px";
    }
});
disminuir.addEventListener("click",function(){
    if (tamaño>10){
        tamaño= tamaño-2;
        texto.style.fontSize= tamaño + "px";
    }
});
normal.addEventListener("click",function(){
    tamaño= 15;
    texto.style.fontSize= tamaño + "px";
});

const volverArriba= document.getElementById("volverArriba");
window.addEventListener("scroll", function(){
    if (window.scrollY>300){
        volverArriba.style.display= "block"
    }else {
        volverArriba.style.display= "none"
    }
});
volverArriba.addEventListener("click",function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselContainer = document.getElementsByClassName('carousel');

let currentSlide = 0;
let autoSlideInterval;

console.log(slides.length)
// Funncion para mostrar un slide especifico
function showSlide(index) {
    console.log(slides.length);
    if (slides.length === 0) return;

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0 ) {
      currentSlide = slides.length -1;
    } else {
      currentSlide = index;
    }

// Quitar la clase active de todos los slides
slides.forEach(slide => slide.classList.remove('active'));

// Activar el slide
slides[currentSlide].classList.add('active')
}

// Avanzar al siguente slide
function nextSlide() {
    showSlide(currentSlide + 1);
}
// Retroceder al slide anterior
function prevSlide() {
    showSlide(currentSlide - 1);
}
// Event Listeners para botones de navegacion
if (nextBtn) nextBtn.addEventListener('click', nextSlide);
if (prevBtn) prevBtn.addEventListener('click', prevSlide);
