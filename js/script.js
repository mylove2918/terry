$('ul li').on('click', function(){
    $('ul li').children('a').removeClass('on')
    $(this).children('a').addClass('on')
})