const serie = [
    { titulo: "Minecraft", imagem: "https://uploads.jovemnerd.com.br/wp-content/uploads/Minecraft-Wall.jpg", descricao: "O Minecraft é um jogo de aventura e construção estilo sandbox (mundo aberto), onde os jogadores podem interagir, explorar e modificar um ambiente tridimensional feito inteiramente de blocos." , breve: "Construa o que pensar" },
    { titulo: "Devil May Cry 5", imagem: "https://upload.wikimedia.org/wikipedia/pt/c/cb/Devil_May_Cry_5.jpg", descricao: "Devil May Cry 5 é um jogo de ação frenética (hack and slash) da Capcom. Focado em combates estilosos e combos espetaculares, a trama se passa anos após Devil May Cry 4 e acompanha três protagonistas jogáveis: Nero, Dante e o misterioso V. Juntos, eles precisam impedir uma invasão demoníaca liderada pelo Rei Urizen." ,breve: "Jogo numero 5" },
    { titulo: "Resident Evil 4", imagem: "https://m.media-amazon.com/images/M/MV5BZWY3ZjRiNTctYzU2My00NDIwLWI3NTAtNmUwZDBlZjlhYjI4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", descricao: "é um aclamado jogo de survival horror e ação em terceira pessoa. Você controla o agente Leon S. Kennedy em uma missão na zona rural da Espanha para resgatar a filha do presidente dos EUA, Ashley Graham, que foi sequestrada por um culto religioso." , breve: "Melhor dos Jogos" },
    { titulo: "Grand Theft Auto: San Andreas", imagem: "https://upload.wikimedia.org/wikipedia/pt/d/d3/Grand_Theft_Auto_San_Andreas_capa.png", descricao: "GTA: San Andreas é um clássico jogo de ação e mundo aberto ambientado no início dos anos 90. Acompanha a história de Carl (CJ) Johnson, que retorna a Los Santos após o assassinato da mãe e precisa limpar seu nome, salvar sua família e dominar as ruas." , breve: "Melhor GTA" },
    { titulo: "Call of Duty: Modern Warfare", imagem: "https://upload.wikimedia.org/wikipedia/pt/e/e9/CallofDutyModernWarfare%282019%29.jpg", descricao: "Call of Duty: Modern Warfare is a first-person shooter series renowned for its gritty, cinematic military campaigns and robust multiplayer. The franchise features high-stakes global operations, tactical combat, and the return of iconic characters like Captain Price, blending fast-paced gunplay with deep weapon customization.", breve: "Saga muito boa" },
    { titulo: "God of War III", imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/6/6c/God_of_War_3_capa.png/330px-God_of_War_3_capa.png", descricao: "God of War III is a brutal action-adventure game originally released for the PlayStation 3 in 2010 and remastered for the PlayStation 4. Players control the spartan warrior Kratos as he scales Mount Olympus, seeking bloody revenge against the Olympian gods who betrayed him." , breve: "O deus da guerra" },
]

const listarSeries = document.getElementById("listarSeries");

function mostrarSerie(lista) {
    listarSeries.innerHTML = ""
    lista.forEach(serie => {
        listarSeries.innerHTML += `
        <div class="col-md-4">
          <div class="card card-filme h-100">
            <img src="${serie.imagem}" class="card-img-top">
            <div class="card-body">
              <h3>${serie.titulo}</h3>
              <p>${serie.breve}</p>
              <button class="btn btn-dark" onclick="verDetalhes('${serie.titulo}', '${serie .descricao}')">Ver detalhes</button>
            </div>
          </div>
        </div>
        `
    })
}

mostrarSerie(serie)

function verDetalhes(titulo, descricao) {
    Swal.fire({
        title: titulo,
        text: descricao,
        icon: "info"
    })
}