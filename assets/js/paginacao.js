let tamanhoDaPagina = 6;
let pagina = 0;


let lutadores = [
    ['C', 'Kamaru Usman', '18', '0'],
    ['1', 'Colby Covington', '23', '2'],
    ['2', 'Não sei', '19', '3'],
    ['3', 'Leon Edwards', '27', '5'],
    ['4', 'Stephen Thompson', '34', '7'],
    ['5', 'Elvis', '37', '9'],
    ['6', 'Vicente Luque', '12', '2'],
    ['7', 'Michael Chiesa', '21', '11'],
    ['8', 'Demian Maia', '28', '4'],
    ['9', 'Neil Magny', '14', '5'],
    ['10','Zezinho Nub', '15', '2']


]



function paginar() {
    $('table > tbody > tr').remove();
    let tbody = $('table > tbody');
    for(let i = pagina * tamanhoDaPagina; i < lutadores.length && i < (pagina+1) * tamanhoDaPagina; i++) {
        tbody.append(
            $('<tr>')
                .append($('<td>').append(lutadores[i][0]))
                .append($('<td>').append(lutadores[i][1]))
                .append($('<td>').append(lutadores[i][2]))
                .append($('<td>').append(lutadores[i][3]))
                .append($('<td>').append($('<button class="btn btn-primary m-2 view">}').attr("value",i).append($('<i class="fas fa-eye">')))
                    .append($('<button class="btn btn-success m-2">}').attr("value",i).append($('<i class="fas fa-edit">')))
                    .append($('<button class="btn btn-danger m-2">').attr("value",i).append($('<i class="far fa-trash-alt">'))))
                 
        )
    }
    $('#numeracao').text('Página ' + (pagina + 1) + ' de ' + Math.ceil(lutadores.length / tamanhoDaPagina));
    $('.view').click(function(){
        let valor = parseInt($(this).attr('value'));
        let lutador = lutadores[valor];
        localStorage.setItem('lutadorview', lutador);
    })
}




function ajustarBotoes() {
    $('#proximo').prop('disabled', lutadores.length <= tamanhoDaPagina || pagina == Math.ceil(lutadores.length / tamanhoDaPagina) - 1);
    $('#anterior').prop('disabled', lutadores.length <= tamanhoDaPagina || pagina == 0);
}

$(function() {
    $('#proximo').click(function() {
        if (pagina < lutadores.length / tamanhoDaPagina - 1) {
            pagina++;
            paginar();
            ajustarBotoes();
        }
    });
    $('#anterior').click(function() {
        if (pagina > 0) {
            pagina--;
            paginar();
            ajustarBotoes();
        }
    });
    paginar();
    ajustarBotoes();
      
});



