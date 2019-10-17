// 1. Faça um código jQuery para o site de restaurantes, que leia o arquivo restaurants.xml e após 
// obter seus dados crie uma lista. Para cada tag <restaurant>, crie um <li> com o nome e endereço 
// do restaurante. Mude a cor do item de acordo com o tipo de restaurante. Crie um link em cada item 
// que direcione ao Google Maps, com o endereço especificado através da longitude e latitude.

$(function () {
    $.ajax({
        type: "GET",
        url: "./resources/restaurant.xml",
        dataType: "xml",
        success: function (data) {
            $(data).find('restaurant').each(function () {
                let restauranType = "list-group-item-light";
                if ($(this).attr('type') == 'bar'){
                    restauranType = "list-group-item-dark";
                }


                let html = '<li class="list-group-item ' + restauranType + '">' +
                    '<div class="d-flex w-100 justify-content-between">' +
                    '<h5 class="mb-1">' + $(this).attr("name") + '</h5>' +
                    '</div> <p class = "mb-1" > ' + $(this).attr("address") + '</p> <small>' +
                    '<a href = "http://maps.google.com/maps?q=' + $(this).attr('lat') + ',' + 
                    $(this).attr("lng") + '" target= "_blank"> Ver no mapa </a></small ></li>';

                $('ul').append(html);

            });
        },
        error: function () {
            alert('Deu um erro... Que tristeza');
        }
    })
})

/* <restaurant name="Pan Africa Market" address="1521 1st Ave, Seattle, WA" lat="47.608940" lng="-122.340141" type="sitdown"/>
<restaurant name="Buddha Thai & Bar" address="2222 2nd Ave, Seattle, WA" lat="47.613590" lng="-122.344391" type="bar"/>
<restaurant name="The Melting Pot" address="14 Mercer St, Seattle, WA" lat="47.624561" lng="-122.356445" type="sitdown"/>
<restaurant name="Ipanema Grill" address="1225 1st Ave, Seattle, WA" lat="47.606365" lng="-122.337654" type="sitdown"/>
<restaurant name="Sake House" address="2230 1st Ave, Seattle, WA" lat="47.612823" lng="-122.345673" type="bar"/>
<restaurant name="Crab Pot" address="1301 Alaskan Way, Seattle, WA" lat="47.605961" lng="-122.340363" type="sitdown"/>
<restaurant name="Mama's Mexican Kitchen" address="2234 2nd Ave, Seattle, WA" lat="47.613976" lng="-122.345467" type="bar"/>
<restaurant name="Wingdome" address="1416 E Olive Way, Seattle, WA" lat="47.617214" lng="-122.326584" type="bar"/>
<restaurant name="Piroshky Piroshky" address="1908 Pike pl, Seattle, WA" lat="47.610126" lng="-122.342834" type="sitdown"/>
</restauran */