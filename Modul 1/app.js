$(document).ready(function() {
    $('.night').click(function() {
        $('.header').css('background-color', 'var(--navy-blue)');
        $('.sunsetlogo').hide();
        $('.nightlogo').show();
        $('a img').css('filter', 'invert(1)');
        $('body').css('background-color', 'black');
        $('button').css('background-color', 'var(--purple)');
    });
    $('.sunset').click(function() {
        $('.header').css('background-color', 'var(--orange)');
        $('.sunsetlogo').show();
        $('.nightlogo').hide();
        $('a img').css('filter', 'invert(0)');
        $('body').css('background-color', 'var(--purple)');
        $('button').css('background-color', 'var(--red)');
    });
    $('.big').click(function() {
        $('body').css('font-size', '2rem');
    });
    $('.small').click(function() {
        $('body').css('font-size', '1.5rem');
    });
    $('.underline').click(function() {
        $('p').css('text-decoration', 'underline');
    });
    $('.no-underline').click(function() {
        $('p').css('text-decoration', 'none');
    });
    $('.ubuntu').click(function() {
        $('body').css('font-family', 'Ubuntu, sans-serif');
    });
    $('.garamond').click(function() {
        $('body').css('font-family', 'Garamond, serif');
    });
    $('.bold').click(function() {
        $('p').css('font-weight', 'bold');
    });
    $('.light').click(function() {
        $('p').css('font-weight', 'lighter');
    });
});