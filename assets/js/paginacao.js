let tamanhoDaPagina = 5;
let pagina = 0;


let lutadores = [
    ['C', 'Kamaru Usman', '18', '0'],
    ['1', 'Colby Covington', '23', '2'],
    ['2', 'Gilbert Burns', '19', '3'],
    ['3', 'Leon Edwards', '27', '5'],
    ['4', 'Stephen Thompson', '34', '7'],
    ['5', 'Jorge Masvidal', '37', '9'],
    ['6', 'Vicente Luque', '12', '2'],
    ['7', 'Michael Chiesa', '21', '11'],
    ['8', 'Demian Maia', '28', '4'],
    ['9', 'Neil Magny', '14', '5']


]


function paginar() {
    $('table > tbody > tr').remove();
    let tbody = $('table > tbody');
    for(let i = pagina * tamanhoDaPagina; i < lutadores.length && i < (pagina+1) * tamanhoDaPagina; i++) {
        tbody.append(
            $('<tr>')
                .append($('<td style="width: 10%">').append(lutadores[i][0]))
                .append($('<td>').append(lutadores[i][1]))
                .append($('<td>').append(lutadores[i][2]))
                .append($('<td>').append(lutadores[i][3]))
        )
    }
    $('#numeracao').text('Página ' + (pagina + 1) + ' de ' + Math.ceil(lutadores.length / tamanhoDaPagina));
}


function ajustarBotoes() {
    $('#proximo').prop('disabled', lutadores.length <= tamanhoDaPagina || pagina > lutadores.length / tamanhoDaPagina - 1);
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