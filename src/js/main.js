$(document).ready(function(){
    $.conta = 1;

    $('body').on('keydown', function(e){
        //console.log(e.keyCode);
        var total = $('.slide').length;

        if (e.keyCode == 40 || e.keyCode == 39){
            e.preventDefault();
            if ($.conta < total)
                $.conta++;
            $("#navega").attr('href', '#slide'+ $.conta).click();
        }

        if (e.keyCode == 37 || e.keyCode == 38){
            e.preventDefault();
            if ($.conta > 1)
                $.conta--;
            $("#navega").attr('href', '#slide'+ $.conta).click();
        }

        if (e.keyCode >= 37 && e.keyCode <= 40)
            $("#subtitulo").html('&mdash; '+$('#slide'+ $.conta).attr('title'));
    });
});