let rankingsDisponiveis = ['C','1','2','3','4','5','6','7','8','9','10']
let selectFormAtleta = document.querySelector('.form-select');

addOptions(selectFormAtleta);


function addOptions(selectFormAtleta)
{
    for(i = 0; i < rankingsDisponiveis.length; i++){
        let option = document.createElement('option');
        option.value = rankingsDisponiveis[i];
        option.textContent = rankingsDisponiveis[i];
        selectFormAtleta.appendChild(option);
        
    }
    
}

