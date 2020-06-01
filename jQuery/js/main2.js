$(document).ready(function() {

    $('[href="https://www.google.com/"]').on('click', function (event) {
        console.log("Linking to google?");
        event.preventDefault();
    });

    $(document).on('contextmenu', function () {
        return false;
    });

    $(document).on('mousedown', function (event) {
        event.stopPropagation();
        
        if (event.which == 3) {

            $('.hidden').addClass('shown');

            if ($(event.target).is('img')) {
                $('.hidden').removeClass('shown');
            }

            console.log(event.pageY, event.pageX);

            $('#context').css({
                top: event.pageY,
                left: event.pageX
            });

            $('#context').fadeIn();
            return false;
        }
        $('#context').fadeOut();
    });
 
    $(function() {
        $(".profile-menu-trigger").click(function() {
            $(".submenu").slideToggle(500);
        });
    });
    $(function() {
        $(".submenu li").click(function() {
            $(".submenu").slideToggle();
        });
    });


    $("#append, #prepend, #replace").on('click', function (e) {
    
        var ele = $(e.currentTarget);
        var action = ele.attr('id');
        var content = $('.text').val();

        console.log(content);
        
        if (action == "prepend") {
            $('#main').prepend(content);
        }
        else if (action == "append") {
            $('#main').append(content);
        }
        else if (action == "replace") {
            $('#main').html(content);
        }

    });


});

