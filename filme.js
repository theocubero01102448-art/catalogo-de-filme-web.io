const filmes =[
    {
        titulo: "super mario galaxy",
        Imagem: "https://www.themoviedb.org/movie/1226863-the-super-mario-galaxy-movie?language=pt-BR#",
        descrição: "Depois de salvar o Reino dos Cogumelos, Mario e seus amigos se encontram em uma missão intergaláctica para deter um novo vilão ameaçador.",
    },
      {
        titulo: "como mágica",
        Imagem: "https://www.themoviedb.org/movie/1007757-swapped?language=pt-BR#",
        descrição: "Uma pequena criatura da floresta e um pássaro majestoso trocam de corpo e precisam se unir para sobreviver à aventura mais incrível de suas vidas.",
    },
      {
        titulo: "psicopata americano",
        Imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/rxT7rVM4oLODCzdkkMPWGPMTSt3.jpg",
        descrição: "americano",
    },
     {
        titulo: "O justiceiro",
        Imagem: "https://www.themoviedb.org/movie/1439930-the-punisher-one-last-kill?language=pt-BR#",
        descrição: "Enquanto Frank Castle busca um significado além da vingança, uma força inesperada o arrasta de volta para a luta.",
    },
     {
        titulo: "miudos e graudos",
        Imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/dbU5QOnTCPo4BKZskarx1bBG9lG.jpg",
        descrição: "grados",
    },
     {
        titulo: "kung fu futebol clube",
        Imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/rO1YoR49hs9QPla0vwCxrMLln33.jpg",
        descrição: "kung",
    },

]

const listaFilmes = document.getElementById("listaFilmes");
function mostrarFilmes(lista) {
    listaFilmes.innerHTML = ""
    lista.forEach(filme => {
        listaFilmes.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                    <img src="${filme.imagem}" class="card-img-top">
                    <div class="card-body">
                        <h3>${filme.titulo}</h3>
                        <p>${filme.descricao}</p>
                        <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo}')">Ver detalhes"</button>
                    </div>
                </div>
            </div>    
        `
    })
}