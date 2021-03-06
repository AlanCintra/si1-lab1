$(function() {
    $('#conteudo').keypress(function(e) {
        if (e.which != 13) {
        } else {
            addConteudo();
            e.preventDefault();
        }
    })
})

function addConteudo() {
    var text = "<assunto>" + $('#conteudo').val() + "</assunto>";
    var addButton = "<button class='btn btn-inverse' type='button' id='mover'>Aprendido</button>";
    var remButton = "<button class='btn btn-inverse' type='button' id='excluir'>Excluir</button>"
    var conteudo = '<li id="itens">' + text + remButton + addButton + '</li>';
    $('#conteudos').append(conteudo);
    $('#conteudo').val('');
    $('#mover').bind('click', mover());
    $('#excluir').bind('click', excluir());
}

function mover() {
    $('#conteudos').on('click', '#mover', function() {
        var item = $(this).parent();
        var assunto = item.find("assunto").text();
        var remButton = "<button class='btn btn-inverse' type='button' id='excluir'>Excluir</button>"
        var aprendido = '<li id="itens">' + assunto + remButton + '</li>';
        $('#aprendidos').append(aprendido);
        $('#excluir').bind('click', excluir());
        item.remove();
        assunto.remove();
    })
}

function excluir() {
    $('#conteudos').on('click', '#excluir', function() {
        $(this).parent().remove();
    })
    $('#aprendidos').on('click', '#excluir', function() {
        $(this).parent().remove();
    })
}