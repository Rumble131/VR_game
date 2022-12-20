$("#NavToggle").on("click", function (event){
    
   event.preventDefault ();

   $("nav").toggleClass  ("active") ;


})

// $(function() { 
//     var header = $("#header"),
//         exploreH = $("explore").InnerHeight (),
//         ScrollOffset= $(window).scrollTop();

//         checkScroll(scrollOffset);
//          });
        
//         function checkScroll(scrollOffset){
//             if ( scrollOffset >= exploreH){
//                 header.addClass("fixed");

//             } else{
//                 header.removeClass("fixed");
//             }
//         }
