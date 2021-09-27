const preguntasRespuestas = [
    [
        { letter: "a", answer: "abducir", status: 0, withLetter:"CON LA A.", question: "Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
        { letter: "a", answer: "avion", answer2:'avión',  status: 0, withLetter:"CON LA A.", question: "Medio de transporte de personas o mercancías que va por el aire"},
        { letter: "a", answer: "abecedario", status: 0, withLetter:"CON LA A.", question: "Conjunto de las letras de un idioma puestas en orden."}
    ],
    [
        { letter: "b", answer: "bingo", status: 0, withLetter:"CON LA B.", question: "Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
        { letter: "b", answer: "blancanieves", status: 0, withLetter:"CON LA B.", question: "Personaje de cuento que estaba acompañada de siete enanitos."},
        { letter: "b", answer: "babero", status: 0, withLetter:"CON LA B.", question: "Tela que se pone a los bebés en el pecho para que no se manchen al comer."}
    ],
    [
        { letter: "c", answer: "churumbel", status: 0, withLetter:"CON LA C.", question: "Niño, crío, bebé"},
        { letter: "c", answer: "chupachups", status: 0, withLetter:"CON LA C.", question: "Caramelo con palo."},
        { letter: "c", answer: "cabeza", status: 0, withLetter:"CON LA C.", question: "Parte superior del cuerpo que está sobre el cuello."}
    ],
    [
       { letter: "d", answer: "diarrea", status: 0, withLetter:"CON LA D.", question: "Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
       { letter: "d", answer: "desierto", status: 0, withLetter:"CON LA D.", question: "Lugar en el que hace muchísimo calor, en donde apenas llueve, lleno de arena, y donde casi no hay vegetación."},
       { letter: "d", answer: "dormir", status: 0, withLetter:"CON LA D.", question: "Forma de descanso que hacemos por las noches o en la siesta, con los ojos cerrados, sin darnos cuenta de nada."}
    ],
    [
        { letter: "e", answer: "ectoplasma", status: 0, withLetter:"CON LA E.", question: "Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
        { letter: "e", answer: "encoger", status: 0, withLetter:"CON LA E.", question: "Lo que les pasa a algunas ropas cuando las lavas con agua muy caliente."},
        { letter: "e", answer: "elefante", status: 0, withLetter:"CON LA E.", question: "Animal mamífero enorme, de color marrón o gris, que vive en Asia o África, y que tiene trompa y grandes orejas."}
    ],
    [
        { letter: "f", answer: "facil", status: 0, withLetter:"CON LA F.", question: "Que no requiere gran esfuerzo, capacidad o dificultad"},
        { letter: "f", answer: "feo", status: 0, withLetter:"CON LA F.", question: "Alguien que no es guapo."},
        { letter: "f", answer: "fiebre", status: 0, withLetter:"CON LA F.", question: "Aumento de la temperatura del cuerpo que tenemos cuando estamos enfermos."}
    ],
    [
        { letter: "g", answer: "galaxia", status: 0, withLetter:"CON LA G.", question: "Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
        { letter: "g", answer: "gallina", status: 0, withLetter:"CON LA G.", question: "Ave doméstica, de la que nos comemos sus huevos y su carne."},
        { letter: "g", answer: "globo", status: 0, withLetter:"CON LA G.", question: "Especie de pelota de goma, que se hincha con aire, y que a veces los niños llevan flotando atado con una cuerda."}
    ],
    [
        { letter: "h", answer: "harakiri", status: 0, withLetter:"CON LA H.", question: "Suicidio ritual japonés por desentrañamiento"},
        { letter: "h", answer: "hielo", status: 0, withLetter:"CON LA H.", question: "Agua que se ha vuelto sólida cuando ha hecho mucho frío."},
        { letter: "h", answer: "humo", status: 0, withLetter:"CON LA H.", question: "Lo que sale cuando se hace un fuego."}
    ],
    [
        { letter: "i", answer: "iglesia", status: 0, withLetter:"CON LA I.", question: "Templo cristiano"},
        { letter: "i", answer: "imán", answer2: "iman", status: 0, withLetter:"CON LA I.", question: "Objeto magnético que puede atraer al hierro y a otros metales."},
        { letter: "i", answer: "inflar", status: 0, withLetter:"CON LA I.", question: "Llenar algo de aire."}
    ],
    [
        { letter: "j", answer: "jabali", answer2:"jabalí", status: 0, withLetter:"CON LA J", question: "Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
        { letter: "j", answer: "jirafa", status: 0, withLetter:"CON LA J.", question: "Mamífero africano de patas y cuello larguísimos."},
        { letter: "j", answer: "jardín", answer2:"jardin", status: 0, withLetter:"CON LA J.", question: "Zona que rodea algunas casas o edificios y que está lleno de césped, flores, árboles..."}
    ],
    [
        { letter: "k", answer: "kamikaze", status: 0, withLetter:"CON LA K.", question: "Persona que se juega la vida realizando una acción temeraria"},
        { letter: "k", answer: "kiwi", status: 0, withLetter:"CON LA K.", question: "Fruta de piel marrón con pelitos, verde por dentro con semillas negras, y de sabor dulce y un poco ácido."},
        { letter: "k", answer: "kilo", status: 0, withLetter:"CON LA K.", question: "Medida de peso que es igual que 1000 gramos."}
    ],
    [
        { letter: "l", answer: "licantropo", answer2: "licántropo", status: 0, withLetter:"CON LA L.", question: "Hombre lobo"},
        { letter: "l", answer: "lágrimas", answer2:"lagrimas", status: 0, withLetter:"CON LA L.", question: "Gotas que nos caen de los ojos."},
        { letter: "l", answer: "luna", status: 0, withLetter:"CON LA L.", question: "Satélite de la Tierra, de color blanco, que se ve por la noche."},
    ],
    [
        { letter: "m", answer: "misantropo", answer2:"misántropo", status: 0, withLetter:"CON LA M.", question: "Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
        { letter: "m", answer: "muerto", status: 0, withLetter:"CON LA M.", question: "Que ya no está vivo."},
        { letter: "m", answer: "mantel", status: 0, withLetter:"CON LA M.", question: "Tela que se pone en las mesas a la hora de comer."}
    ],
    [
        { letter: "n", answer: "necedad", status: 0, withLetter:"CON LA N.", question: "Demostración de poca inteligencia"},
        { letter: "n", answer: "nublado", status: 0, withLetter:"CON LA N.", question: "Cielo lleno de nubes y sin sol."},
        { letter: "n", answer: "nido", status: 0, withLetter:"CON LA N.", question: "Tipo de casa que construyen los pájaros para poner sus huevos."},
    ],
    [
        { letter: "ñ", answer: "señal", status: 0, withLetter:"CONTIENE LA Ñ.", question: "Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
        { letter: "ñ", answer: "ñadú", answer2:"ñadu", status: 0, withLetter:"CON LA Ñ.", question: "Ave de América parecida al avestruz pero más pequeña."},
        { letter: "ñ", answer: "ñu", status: 0, withLetter:"CON LA Ñ.", question: " Mamífero africano de color marrón parecido a un toro con los cuernos curvos."}
    ],
    [
        { letter: "o", answer: "orco", status: 0, withLetter:"CON LA O.", question: "Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
        { letter: "o", answer: "ojal", status: 0, withLetter:"CON LA O.", question: "Agujero alargado que se hace en la ropa para abrochar un botón."},
        { letter: "o", answer: "ojo", status: 0, withLetter:"CON LA O.", question: "Órgano del sentido de la vista. Lo que usamos para ver."}
    ],
    [
        { letter: "p", answer: "protoss", status: 0, withLetter:"CON LA P.", question: "Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
        { letter: "p", answer: "paraguas", status: 0, withLetter:"CON LA P.", question: "Instrumento que sirve para protegerse de la lluvia."},
        { letter: "p", answer: "peces", status: 0, withLetter:"CON LA P.", question: "Animales que viven en el agua, cubiertos de escamas, con aletas para nadar."}
    ],
    [
        { letter: "q", answer: "queso", status: 0, withLetter:"CON LA Q.", question: "Producto obtenido por la maduración de la cuajada de la leche"},
        { letter: "q", answer: "quiosco", status: 0, withLetter:"CON LA Q.", question: " Caseta en la que venden periódicos, revistas, tebeos, chuches,... y otras veces flores."},
        { letter: "q", answer: "querer", status: 0, withLetter:"CON LA Q.", question: "Sentir amor o cariño por algo o alguien. Desear algo."}
    ],
    [
        { letter: "r", answer: "raton", answer2:"ratón", status: 0, withLetter:"CON LA R.", question: "Roedor"},
        { letter: "r", answer: "raíles", answer2:"railes", status: 0, withLetter:"CON LA R.", question: "Especie de barras sobre las que se mueven los trenes en las vías."},
        { letter: "r", answer: "rápido",answer2:"rapido", status: 0, withLetter:"CON LA R.", question: "Veloz."}
    ],
    [
        { letter: "s", answer: "stackoverflow", status: 0, withLetter:"CON LA S.", question: "Comunidad salvadora de todo desarrollador informático"},
        { letter: "s", answer: "salir", status: 0, withLetter:"CON LA S.", question: "Pasar de dentro a fuera."},
        { letter: "s", answer: "sacapuntas", status: 0, withLetter:"CON LA S.", question: "Lo que usas para que tus lápices tengan la punta afilada."}
    ],
    [
        { letter: "t", answer: "terminator", status: 0, withLetter:"CON LA T.", question: "Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
        { letter: "t", answer: "telaraña", status: 0, withLetter:"CON LA T.", question: "Tela en forma de red que hacen las arañas."},
        { letter: "t", answer: "tenedor", status: 0, withLetter:"CON LA T.", question: "Objeto que se usa para pinchar los alimentos y comérselos. "}
    ],
    [
        { letter: "u", answer: "unamuno", status: 0, withLetter:"CON LA U.", question: "Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
        { letter: "u", answer: "uniforme", status: 0, withLetter:"CON LA U.", question: "Traje que algunas personas llevan en su trabajo, como por ejemplo los policías."},
        { letter: "u", answer: "uña", status: 0, withLetter:"CON LA U.", question: "Parte dura que está en la punta de los dedos, que cortamos cuando crece y que algunas personas se pintan a veces."}
    ],
    [
        { letter: "v", answer: "vikingos", status: 0, withLetter:"CON LA V.", question: " Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
        { letter: "v", answer: "ventilador", status: 0, withLetter:"CON LA V.", question: "Aparato que gira y que sirve para dar aire."},
        { letter: "v", answer: "verano", status: 0, withLetter:"CON LA V.", question: "Estación del año en la que hace mucho calor."}
    ],
    [
        { letter: "w", answer: "sandwich", answer2: "sándwich", status: 0, withLetter:"CONTIENE LA W.", question: "Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
        { letter: "w", answer: "whisky", status: 0, withLetter:"CON LA W.", question: "Bebida alcohólica."},
        { letter: "w", answer: "windsurf", status: 0, withLetter:"CON LA W.", question: "Deporte que se practica en el mar, de pie sobre una tabla alargada que lleva una vela triangular."}
    ],
    [
        { letter: "x", answer: "botox",  answer2: "bótox", status: 0, withLetter:"CONTIENE LA X.", question: "Toxina bacteriana utilizada en cirujía estética"},
        { letter: "x", answer: "extranjero", status: 0, withLetter:"CONTIENE LA X.", question: "Persona de otro país."},
        { letter: "x", answer: "taxi", status: 0, withLetter:"CONTIENE LA X..", question: "Coche con conductor que lleva a las personas donde quieren ir y les cobra según los kilómetros recorridos."}
    ],
    [
        { letter: "y", answer: "peyote", status: 0, withLetter:"CONTIENE LA Y.", question: "Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
        { letter: "y", answer: "yema", status: 0, withLetter:"CON LA Y.", question: "Parte amarilla del huevo."},
        { letter: "y", answer: "yate", status: 0, withLetter:"CON LA Y.", question: " Barco de lujo. "}
    ],
    [
        { letter: "z", answer: "zen", status: 0, withLetter:"CON LA Z.", question: "Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},    
        { letter: "z", answer: "zapatos", status: 0, withLetter:"CON LA Z.", question: "Lo que nos ponemos en los pies."},
        { letter: "z", answer: "zoo", status: 0, withLetter:"CON LA Z.", question: "Parque en el que hay todo tipo de animales de todo el mundo que se pueden visitar por el público."}
    ]
];

//declaramos/asignamos variables let
let nombreJugador;
let aciertos = 0;
let fallos = 0;
let sinContestar = preguntasRespuestas.length;
let tiempoInicio= 200;
let indice = 0;
let respuesta;
let color = "white";
let noAcabado= false;
let parpadear;
let laRespuesta;
let ranking;

//declaramos/asignamos variables const
const sonidoCorrecta = new Audio('media/correct.mp3');
const sonidoIncorrecta = new Audio('media/fail.mp3');
const rosco = [];
const conLaletra = document.getElementById('letra');
const pregunta= document.getElementById('pregunta');
const respuestaCorrecta= document.getElementById('correcta');
const marcador = document.getElementById('aciertos');
const aceptar = document.getElementById('aceptar');
const abandonar = document.getElementById('abandonar');
const jugador = document.getElementById('nombrejudagor');
const tiempo = document.getElementById('tiempo');
const idCorrecta = document.querySelector('#correcta')
const rankingJugadores = [
    {nombre:'Alex', aciertos:25, fallos:2},
    {nombre:'Sergi', aciertos:20, fallos:7},
    {nombre:'Gisela', aciertos:21, fallos:6},
    {nombre:'Victor', aciertos:18, fallos:9},
    {nombre:'Marina', aciertos:19, fallos:8},
];

ocultarReglas();

function juegoPasapalabra(){
    elegirRosco();
    colocarLetras();
    noAcabado=true;
    temporizador();
    preguntas();
}
/////// 5 ----> EMPIEZA EL JUEGO. 
//Preguntas del juego
function preguntas(){
    
    parpadear = setInterval (parpadeo, 500);
     //Para que en la primera vuelta muestre siempre la primera pregunta.       
    if(conLaletra.textContent === ''){
        conLaletra.innerHTML=rosco[indice].withLetter;
        pregunta.innerHTML=rosco[indice].question;
    }
    
    //PARA IR MOSTRANDO CADA PREGUNTA DESPUES DE ENVIAR LA RESPUESTA CON EL BOTON ACEPTAR
    aceptar.addEventListener('click',function(){
        enviarRespuesta();
    });      
    //O BIEN PULSANDO LA TECLA ENTER 
    if(noAcabado){
        document.addEventListener('keydown', (event) => {
            let teclaPulsada;
            teclaPulsada =  event.key;
            if(teclaPulsada === "Enter"){
                enviarRespuesta();
            }
          });
    }
    //ABANDONAR EL JUEGO, CON EL BOTON ABANDONAR
    abandonar.addEventListener('click',function(){
        finJuego();
    });
}
/////// EMPIEZA EL JUEGO <----


///// ---> ENVIAR, ALMACENAR Y COMPROBAR RESPUESTA
//Enviar y compropbar la respuesta
function enviarRespuesta(){
    document.querySelector(`#${rosco[indice].letter} h2`).style.color='white';
    //guardamos la respuesta
    respuestaPregunta();
        //comparamos la respuesta
        switch(respuesta){
            case (rosco[indice].answer):
            case (rosco[indice].answer2):
                correcta();
                break;
            case 'pasapalabra':
            case ' ':
                pasapalabra();
                break;
            default:
                incorrecta();
                break;
        }
    //vemos si queda alguna por contestar con el status. 
    comprobarStatus();
}

//validamos la respuesta introducida y la almacenamos
function respuestaPregunta(){
    respuesta =  document.getElementById('respuesta').value;
            if(respuesta===''){
                respuesta='pasapalabra';
            }else{
                respuesta = respuesta.toLowerCase();
            }
            document.getElementById('respuesta').value='';
}
///// FIN ENVIAR, ALMACENAR Y COMPROBAR RESPUESTA <----



////// ----> MOSTRAR FRASE RESPUESTA CORRECTA
//respuesta correcta
function correcta(){
    sonidoCorrecta.play();
    respuestaCorrecta.innerHTML = `La respuesta ${rosco[indice].answer} es correcta!`;
    idCorrecta.style.borderLeft = "thick solid #005c6b";
    idCorrecta.style.color = "#005c6b";
    document.querySelector(`#${rosco[indice].letter} h2`).style.backgroundColor='#005c6b'; 
    setTimeout(function() {
        respuestaCorrecta.innerHTML = '';
        document.querySelector('#correcta').style.borderLeft = "0";
    }, 1000);                            
    rosco[indice].status=1;
    aciertos += 1;
    sinContestar -= 1;
}
//respuesta incorrecta
function incorrecta(){
    sonidoIncorrecta.play();
    respuestaCorrecta.innerHTML = `La respuesta correcta era ${rosco[indice].answer}`;
    idCorrecta.style.borderLeft = "thick solid #890359"
    idCorrecta.style.color = "#890359";
    document.querySelector(`#${rosco[indice].letter} h2`).style.backgroundColor='#890359';  
    setTimeout(function() {
        respuestaCorrecta.innerHTML = '';
        document.querySelector('#correcta').style.borderLeft = "0";
    }, 2000); 
    rosco[indice].status=2;
    fallos += 1;
    sinContestar -= 1;
}

//pasapalabra
function pasapalabra(){
    respuestaCorrecta.innerHTML = `PASAPALABRA!!!`;
    document.querySelector('#correcta').style.borderLeft = "thick solid rgba(255, 255, 255, 0.719)"
    document.querySelector('#correcta').style.color = "rgba(255, 255, 255, 0.719)"; 
    setTimeout(function() {
        respuestaCorrecta.innerHTML = '';
        document.querySelector('#correcta').style.borderLeft = "0";
    }, 1000); 
}
////// FIN MOSTRAR FRASE <----



//// ----> COMPROBAR SI QUEDAN PREGUNTAS SIN RESPUESTA
//comprobamos si hay preguntas sin responder
function comprobarStatus(){
    let comprobar=[];
    
    for(i=0;rosco.length >i;i++){
        comprobar.push(rosco[i].status);
    }            
    //si hay algun status en 0 (pregunta sin responder), continuamos
    noAcabado = comprobar.some(e=>e === 0);
    if(noAcabado){
        do{
            indice++;
            if(indice===rosco.length){
                indice=0;
            }  
            
        }while(rosco[indice].status !==0);
        conLaletra.innerHTML=rosco[indice].withLetter;
        pregunta.innerHTML=rosco[indice].question;
        infoJugador();
    }else{ 
        finJuego();
    }    
}    
//// COMPROBAR SI QUEDAN PREGUNTAS SIN RESPUESTA <---



/////// ----> MOSTRAR LA INFO ACTUALIZADA, (ACIERTOS)
//Mostramos el tiempo y los aciertos.
function infoJugador(){
    marcador.innerHTML=`<h3>${aciertos}</h3>`;
    jugador.innerHTML=`<h3>${nombreJugador}</h3>`;
    return;
}
/////// FIN MOSTRAR LA INFO ACTUALIZADA, (ACIERTOS) <----



//////// 2 ----> PREPARAMOS EL ROSCO 
//se crea un rosco con las preguntas aleatorias
function elegirRosco(){
    let preguntaRandom=[];
    rosco.length=0;
    for(i=0; preguntasRespuestas.length > i; i++){
        preguntaRandom = preguntasRespuestas[i][Math.floor(Math.random() * preguntasRespuestas[i].length)];
        rosco.push(preguntaRandom);      
    }
    return;
}

//se colocan las letras con la forma del rosco
function colocarLetras(){
    letrasRosco = document.getElementById("letrasRosco")
        letrasRoscoArray = letrasRosco.textContent.split('');
        letrasRosco.textContent = '';
        for(var i = 0; i< letrasRoscoArray.length; i++){
            letrasRosco.innerHTML += `<div id="${letrasRoscoArray[i]}"; style="transform:rotate(+${(i*13.3)}deg)"><h2 style="transform:rotate(-${(i*13.3)}deg);"> ${letrasRoscoArray[i]}</h2></div>`
        }
        return;
}
//////// FIN PREPARAMOS EL ROSCO <---



///////// 1 ---> OCULTAMOS LA VENTANA DE LAS REGLAS.
//cuando clicamos al botón jugar, empezamos el juego.
function ocultarReglas(){
    let jugar = document.getElementById('jugar');
    //Pulsar el botón jugar
    nombreJugador = jugar.addEventListener('click', nombrePersona);
    return;
}

//Almacenamos el nombre del jugador, escondemos la información y empieza el juego.
function nombrePersona(){
    nombreUsuario =  document.getElementById('nombreUsuario').value;

    if(nombreUsuario===''){
    nombreJugador='Invitado';
    }else{
    nombreJugador = nombreUsuario;
    }
    document.getElementById('reglasJuego').style.display='none';
    infoJugador();
    juegoPasapalabra();
    return nombreJugador;
}
//////////// FIN OCULTAMOS LA VENTANA DE LAS REGLAS <-----



/////// 3---> TEMPORIZADOR
//Temporizador por segundos.
function temporizador(){
    tiempo.innerHTML=`<h3>${tiempoInicio}</h3>`;
    if(tiempoInicio===0){
        finJuego();
    }else{
        tiempoInicio-=1;
        setTimeout('temporizador()',1000);
    }
    
}
/////// FIN TEMPORIZADOR <---



//////----> ACABA EL JUEGO
//Cuando acabamos el rosco, por el tiempo, por acabar las preguntas o por abandono.
function finJuego(){
    ///si el rosco está acabado.
    if(!noAcabado){
        document.getElementById('reglasJuego').style.display='flex';
        document.getElementById('reglasJuego').innerHTML=
                `<div>
                 <h3 style="margin-bottom:0.5vw">¡¡¡¡¡Enhorabuena!!!!! Ha completado el rosco de pasapalabra!</h3>
                 <h2>Tienes <span style="color:#005c6b";>${aciertos}</span> acietos y <span style="color:#890359";>${fallos}</span> fallos.</h2>
                 <p> A continuación puedes ver tu posición en el ranking de jugadores:</p>
                 <ol></ol>
                 <button type="submit" id="volverAjugar"> ¡Volver a jugar!</button>
                 </div>
                 `
        imprimirRanking();
        document.getElementById('volverAjugar').addEventListener('click',function(){
            location.reload();
        }) 
    ///si el rosco no está acabado pero hemos pulsado el boton abandonar. 
    }else{
        document.getElementById('reglasJuego').style.display='flex';
        document.getElementById('reglasJuego').innerHTML=
                `<div>
                 <h3 style="margin-bottom:0.5vw">Sabemos que no ha sido nada facil, ¡Bien hecho!</h3>
                 <h2>Tienes <span style="color:#005c6b";>${aciertos}</span> acietos y <span style="color:#890359";>${fallos}</span> fallos. Te han faltado <span style="color:rgba(255, 255, 255, 0.719)";>${sinContestar}</span> por contestar.</h2>
                 <button type="submit" id="volverAjugar"> ¡Volver a jugar!</button>
                 </div>
                 `
        
        document.getElementById('volverAjugar').addEventListener('click',function(){
            location.reload();
        }) 
    }     
}
////////// FIN ACABA EL JUEGO <----



///// ---> RANKING
//Añadimos en el ranking al jugador. Y ordenamos el array. Mostramos con un loop, la lista en orden de jugadores.
function imprimirRanking(){
    rankingJugadores[5] = {nombre: nombreJugador, aciertos: aciertos, fallos: fallos}
    ranking = rankingJugadores.sort(((a, b) => b.aciertos - a.aciertos));
    let node;
    let textnode;

    for(i=0; i<rankingJugadores.length;i++){
        node = document.createElement("li");
        textnode = document.createTextNode(`${rankingJugadores[i].nombre}: ${rankingJugadores[i].aciertos} aciertos y ${rankingJugadores[i].fallos} fallos`);
        node.appendChild(textnode);
        document.querySelector("#reglasJuego div ol").appendChild(node);
    }
}
/////// FIN RANKING <-----



//////FUNCION SETINTERVAL para que las letras del rosco parpadeen
function parpadeo() {
    if(noAcabado){
         color = (color == "#ffffff")? "#ffffff44" : "#ffffff";
         document.querySelector(`#${rosco[indice].letter} h2`).style.color = color;
    }else{
     clearInterval(parpadear);
    }
    
 }
