const listaConselhos = [
    "A sorte favorece a mente preparada.",
    "Pequenos progressos diários levam a grandes resultados.",
    "A disciplina é a ponte entre metas e realizações.",
    "Não espere por oportunidades, crie-as.",
    "Simplicidade é o último grau de sofisticação.",
    "O erro é apenas uma oportunidade de recomeçar com mais inteligência."
];

function inicializarCards() {
    const textos = document.querySelectorAll('.card p');
    
    // Embaralha e distribui os conselhos
    textos.forEach((p) => {
        const indexAleatorio = Math.floor(Math.random() * listaConselhos.length);
        p.innerText = listaConselhos[indexAleatorio];
    });
}

// Executa ao carregar
window.onload = inicializarCards;