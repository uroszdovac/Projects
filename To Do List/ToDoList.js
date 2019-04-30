$('ul').on('click', 'li', function(){
    $(this).toggleClass('done');
})

$('ul').on('click', 'span', function(e){
    e.stopPropagation();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
})

$('input[type="text"]').on('keypress', function(e){
    if(e.which === 13){
        var liText = $(this).val();
        $(this).val('');
        $('ul').append('<li><span><i class="far fa-trash-alt"></i></span> ' + liText +'</li>');        
    
    }
})

$('.fa-plus').on('click', function(){
    $('input[type="text"]').fadeToggle(500);
})