function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value;

    //se campoPesquisa for uma string sem nada
    if (campoPesquisa =="") {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome do atleta ou esporte.</p>"
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        //se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento
        resultados += `
            <div class="item-resultado">
            <h2>
                <a href="https://www.instagram.com/rebecarandrade/?hl=pt-br" target="_blank">${dado.titulo}</a> 
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
    `; 
    }
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
    }
}


