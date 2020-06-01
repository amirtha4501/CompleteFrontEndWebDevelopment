$(document).ready(function() {

    var s = new gquery("my-selector");

    console.log($('.submenu a').first().text()); // Accessing first element in list a
    console.log($('.submenu a').last().text()); // Accessing last element in list a

    $('textarea').focusin(function() {
        console.log("Focussed in on the textarea");
    });
    $('textarea').focusout(function() {
        console.log("Focussed out on the textarea");
    })

    $('p:contains("first")').append(" This has the 'first' word in it. Surprisingly it still does!");

    if ($(':contains("second")').is('div')) {
        console.log("The word is in the paragraph");
    }

    $('p').each(function() {
        console.log($(this).text());
    })

    window.passed = 0;
    $('input[name=email]').on('keyup', function() {

        if($(this).val().indexOf('@') > -1) {
            passed++;
            if($(this).val().indexOf('.') > -1) {
                passed++;
            }
        }
    })


    gQuery(".my-selector").addClass("MYNEWCLASS");
    gQuery("#main").addClass("MYNEWCLASS");

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

    function printThis(el) {
        if($(this).text()) {
            console.log($(this).text());
        }
        else {
            console.log($(this).val());
        }
    }
    $('input').focusin(printThis); // call back function


});

