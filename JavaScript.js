const boton= document.getElementById("botonCambiar");
const titulo= document.getElementById("titulo");
let contador= 0;
boton.addEventListener("click",function(){
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