
/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */

(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {
                      
            //HOVER DROPDOWN SCRIPTS
            $('ul.nav li.dropdown').hover(function () {
                $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
            }, function () {
                $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
            });

            var result = [{title: "Dimuthu", link: "team-members.html", img: "11.jpg"}, {title: "Prabhashi", link: "team-members.html", img: "11.jpg"},
             {title: "Prabhashi", link: "team-members.html", img: "11.jpg"}, {title: "Prabhashi", link: "team-members.html", img: "11.jpg"}, 
             {title: "Prabhashi", link: "team-members.html", img: "11.jpg"}, {title: "Prabhashi", link: "team-members.html", img: "11.jpg"}];
            $.each(result,  function(index, results) {
                $('#myList').append('<li><a href="'+results.link+'"><img src="'+results.img+'" class="product-index-logo" alt="" /></a></li>'); // append list item to div
            });

        

            //TESTIMONIAL & SLIDEER SPEED
            $('.carousel').carousel({
                interval: 4000 //TIME IN MILLI SECONDS
            })
            // PRETTYPHOTO FUNCTION 

            /*$("a.preview").prettyPhoto({
                social_tools: false
            });*/
           
            /*====================================
            WRITE YOUR SCRIPTS HERE
            ======================================*/
        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));
