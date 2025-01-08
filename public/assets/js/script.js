$('.l-header__drawer-icon').on('click', function(){
    $(this).toggleClass('is-checked');
    $('.l-header__drawer-content').toggleClass('is-checked');
})

$('l-header__menu-link').on('click', function(){
    $('.l-header__drawer-icon').removeClass('is-checked');
    $('.l-header__drawer-content').removeClass('is-checked');
})