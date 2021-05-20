$(function () {
    if(localStorage.getItem('lutadorEdit')){
        let data = localStorage.getItem('lutadorEdit');
        let atletaEdit = data.split(',');
        let select = document.querySelector('.form-select');
        let option = document.createElement('option');
        option.textContent = atletaEdit[0];
        option.setAttribute('selected','selected');
        select.append(option);
        let ranking = $('select :selected');
        console.log(ranking.text());
        

    }
});