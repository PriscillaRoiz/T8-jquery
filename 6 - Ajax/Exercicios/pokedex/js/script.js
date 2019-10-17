// 3. Vamos fazer uma PokeDex! Utilizando a seguinte url, 
// https://pokeapi.co/api/v2/pokemon/?limit=151, crie uma lista com o nome dos 151 pokemons 
// da primeira geração. No clique de um item da lista, um modal com informações mais completas 
// deve ser mostrado. Essas informações podem ser obtidas utilizando o endereço da api que é retornado 
// junto com a lista de pokemons. As informações mostradas no modal ficarão a seu critério.


$(function () {
    $.ajax({
        type: "GET",
        url: "https://pokeapi.co/api/v2/pokemon/?limit=151",
        dataType: "json",
        success: function (data) {

            data.results.forEach(function (item, indice) {

                let html = '<li class="list-group-item list-group-item-danger">' +
                    '<div class="d-flex w-100 justify-content-between">' +
                    '<h5 class="mb-1">' + item.name + '</h5>' +
                    '</div> <small><a href="#" class="details" data-api="' + item.url + '">Detalhes</a></small></li>';

                $('ul').append(html);

            });

            $('.details').click(function(){
                let urlApi = $(this).data('api');
                $.ajax({
                    type: "GET",
                    url: urlApi,
                    dataType: "json",
                    success: function (pokemon) {

            $('.modal-title').text(pokemon.name);
            $('.modal-body p').text(pokemon.weight);

            $(`#modalDetalhes`).modal('show');
                    }
                })
            })

        }
    })
})