let numeroSecreto=0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeromaximo 


console.log(numeroSecreto); 
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarintento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);

    /* console.log(numeroSecreto); */
    if (numeroDeUsuario === numeroSecreto){ // triple igual ( igual en valor y en tipo )

        asignarTextoElemento('p',`Acertaste el numero en  ${intentos} ${(intentos === 1)  ? "vez": "veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        
        intentos ++;
        limpiarCaja();
    }
    
    return;

}
    function limpiarCaja(){
       let valorcaja= document.querySelector('#valorUsuario').value ='';
       
    }
    function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*10)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)){

    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }    
    
}
    function condicionesIniciales(){
        asignarTextoElemento('h1','Juego del numero secreto !');
        asignarTextoElemento('p','Indica un numero del 1 al 10')
        numeroSecreto= generarNumeroSecreto();
        intentos=1;
    }

    function reiniciarJuego(){
        //LIMPIAR CAJA 
        limpiarCaja();
        //INDICAR MENSAJE DE INTERVALO DE NUMEROS
        //Generar el numero aleatorio
        //INICIALIZAR EL NUMERO DE INTENTOS 
        condicionesIniciales();
        //DESHABILITAR EL BOTON DE NUEVO JUEGO 
        document.querySelector('#reiniciar').setAttribute('disabled','true');

    }
condicionesIniciales();