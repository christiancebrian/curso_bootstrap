// Criando a escuta
$(document).ready(function () {

});
// Hover do menu de abas entrada mouse
$('.hoverNavAba').on('mouseenter', function () {
    $(this).addClass('active');
    $(this).attr('aria-current', 'true');
});
// Hover do menu de abas saida mouse
$('.hoverNavAba').on('mouseleave', function () {
    $(this).removeClass('active');
    $(this).removeAttr('aria-current');
});
// Função para leitura de news do menu de abas
$('.hoverNavAba').on('click', function () {
    var numString = $('#numberNews').text();
    number = parseInt(numString);
    if (number > 1) {
        --number;
        $('#numberNews').text(number);
    } else {
        $('#numberNews').hide();
    }
})