let btnExecute = document.querySelector("#execute");
btnExecute.addEventListener("click", () => {
    encontrarAmigos();
});

function encontrarAmigos() {
    for (let i = 2; i < 3000; i++) {
        let sumaDivisores = encontrarSumaDivisores(i);
        if ((encontrarSumaDivisores(sumaDivisores) === i) && (sumaDivisores != i)) {
            console.log(toStringAmigos(i, sumaDivisores));
        }
    }
}

function encontrarSumaDivisores(index) {
    let sumaDivisores = 0;
    for(let i = index-1; i > 0; i--) {
        if(index%i === 0) {
            sumaDivisores += i;
        }
    }
    return sumaDivisores;
}

function toStringAmigos(i, sumaDivisores) {
    return `Numeros amigos: ${i}, ${sumaDivisores}`;
}