const serie = [
    { titulo: "invencivel", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/qhb7RWU9ad9a5m3HbeRRXzjaMXf.jpg", descricao: "E uma serie animada que retrata a vida de um super heroi" , breve: "invencivel" },
    { titulo: "you", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/ivqi64qY0S3ZAimvjlqXLEH7D6W.jpg", descricao: "Um homem obsessivo e perigosamente charmoso vai ao extremo para entrar na vida das mulheres que o fascinam." ,breve: "voce" },
    { titulo: "the boys", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/in1R2dDc421JxsoRWaIIAqVI2KE.jpg", descricao: "Na trama, conhecemos um mundo em que super-heróis são as maiores celebridades do planeta, e rotineiramente abusam dos seus poderes ao invés de os usarem para o bem.", breve: "um super" },
    { titulo: "rick e morty", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/5qfd0e2uMbVInX3YdeFbDsfxi1t.jpg", descricao: "O brilhante cientista beberrão Rick sequestra Morty, seu neto aborrescente, para viver loucuras em outros mundos e dimensões alternativas." , breve: "aventuras" },
    { titulo: "bones", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/rElaRnNez2dXBCMv1THHdVcroFY.jpg", descricao: "A Dra. Temperance Brennan é uma antropóloga forense altamente qualificada que trabalha no Instituto Jeffersonian e escreve romances. Ela possui um talento impressionante para enxergar pistas em ossos de vítimas, e por isso a polícia a chama para ajudar em investigações quando os restos mortais estão tão decompostos, queimados ou destruídos que métodos de identificação padrão são inúteis. Temperance frequentemente trabalha em parceria com o agente especial Seeley Booth, ex-atirador de elite do exército que não confia na ciência ou em cientistas para resolver crimes, mas desenvolveu um respeito pessoal e profissional por Temperance.", breve: "romance" },
    { titulo: "uma familia da pesada", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/j28XGzAhvJNGWEHbYrzvREw7kKd.jpg", descricao: "A série animada apresenta as aventuras da família Griffin. O ignorante Peter e sua esposa Lois residem em Quahog, em Rhode Island e têm três filhos. Meg, a filha mais velha, é uma pária social, e o adolescente Chris é estranho e sem noção quando se trata do sexo oposto. O mais novo, Stewie, é um bebê gênio decidido a matar sua mãe e destruir o mundo. O cachorro falante, Brian, mantém Stewie sob controle enquanto toma martinis e resolve seus próprios problemas de vida." , breve: "familia da pesada" },
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