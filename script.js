const loader =
document.getElementById("loader");


const text =
document.querySelector(".loading-text");



const messages = [

"Inicializando Wanheda Studio...",

"Cargando recursos...",

"Preparando Vacío Extremo...",

"Verificando launcher...",

"Listo."

];



let index = 0;



let interval = setInterval(()=>{


if(index < messages.length){


text.innerHTML =
messages[index];


index++;


}


},600);





window.onload = ()=>{


setTimeout(()=>{


clearInterval(interval);



loader.style.opacity="0";


loader.style.transition=
"opacity .8s";



setTimeout(()=>{


loader.style.display="none";


},800);



},3500);


};
