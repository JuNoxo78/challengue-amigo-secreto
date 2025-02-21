const inputFriends = document.getElementById("amigo");
const listFriends = document.getElementById("listaAmigos");
const sortedFriend = document.getElementById("resultado")

let amigos = [];

function agregarAmigo() {
    if (inputFriends.value != "") {
        amigos.push(inputFriends.value);
        listarAmigos();
    } else {
        alert("El nombre no es válido");
    }
    inputFriends.value = "";
}

function listarAmigos() {
    listFriends.innerHTML = "";

    for (let index = 0; index < amigos.length; index++) {
        let element = document.createElement("li");
        element.textContent = amigos[index];
        listFriends.appendChild(element);
    }
}

function sortearAmigo() {
    if (amigos.length != 0) {
        let randomIndex = Math.floor(Math.random() * amigos.length);
        listFriends.innerHTML = "";
        resultado.innerHTML = `El amigo sorteado es ${amigos[randomIndex]}.`
    } else {
        alert("Tiene que ingresar algún amigo.")
    }
}
