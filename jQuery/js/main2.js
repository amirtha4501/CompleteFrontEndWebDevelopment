$(document).ready(function() {
    $('[data-trigger="dropdown"]').on('mouseenter',function () {
       var submenu = $(this).parent().find('.submenu');
       console.log(submenu);
       submenu.addClass('active');
       
       $('.profile-menu').on('mouseleave', function () {
           submenu.removeClass('active');
       })
    });
});