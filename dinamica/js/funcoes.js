$(document).ready(function() {
    $('#adiciona').click(function() {
        var conteudo = $('#conteudo').val();
        $('#conteudos').append('<li>' + conteudo + '</li>');
    })
})