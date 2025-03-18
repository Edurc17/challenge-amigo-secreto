// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para la lista de amigos
let amigos = [];
// Se crea la función para poder capturar el texto ingresado en una variable.
function agregarAmigo() {
    const nombreAmigo = document.getElementById('amigo').value;
// Se crea la condicion para alertar que no se ha escrito un nombre.
    if (nombreAmigo === "") {
    alert("Por favor, inserte un nombre.");
    return;
    }
// Se actualiza la lista de nombres y se muestra la lista en la consola
    amigos.push(nombreAmigo);
    console.log("Lista de amigos:", amigos);
// Se limpia el cuadro de texto para ingresar más nombres.
    document.getElementById('amigo').value = "";
}

// Funcion para actualizar la lista de amigos.
function actualizarLista() {
const listaAmigosElementos = document.getElementById('listaAmigos');

// Limpiar la lista existente
listaAmigosElementos.innerHTML = "";

//  Iterar sobre el arreglo
for (let i = 0; i < amigos.length; i++) {
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = amigos[i];
    listaAmigosElementos.appendChild(nuevoElemento);
    }
}

// Se crea la funcion para sortear los nombres de los amigos
function sortearAmigo() {
  // 1. Validar que haya amigos disponibles
if (amigos.length === 0) {
    document.getElementById("resultado").innerHTML = "No hay amigos para sortear.";
    return;
}

  // 2. Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // 3. Obtener el nombre sorteado
const amigoSorteado = amigos[indiceAleatorio];

  // 4. Mostrar el resultado
document.getElementById("resultado").innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}
