$(document).ready(function () {

    alert("Loaded...");

    // JavaScript and jQuery codes...
    
        document.getElementById("text").innerHTML = "This is my text"; // JS
        $('#text').html("This is my text"); // jQuery
        

        document.getElementsByClassName("my-input")[0].value = "Value of input"; // JS
        $('.my-input').val("New input value"); // jQuery

        
        var el = document.getElementById('text'); // JS
        console.log("EL in vanilla JS:", el);
        console.log("El in jquery:", $(el)); // jQuery


        document.getElementById('go-button').addEventListener('click', alertMe); // JS
        function alertMe(){alert("Great click");} // JS
        $('#go-button').on('click', function() {  
            alert('Great click');  
        }); // jQuery

        
        $('#go-button').hover(function () { 
            console.log('Button hovered..');
        }); // jQuery

        $('#go-button').on('mouseenter',function () {
            console.log('Mouse entered the button...');
        }); // jQuery

        $('#go-button').on('mouseleave',function () {
            console.log('Mouse leaved the button...');
        }); // jQuery

        $('#go-button').on('mouseup',function () {
            console.log('Mouse up the button...');
        }); // jQuery

        $('#go-button').on('mousedown',function () {
            console.log('Mouse down the button...');
        }); // jQuery




});