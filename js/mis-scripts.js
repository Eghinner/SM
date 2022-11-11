$(window).scroll(function(){
    scroll_barra();
});


jQuery(document).ready(function($){
  scroll_barra();
});

function scroll_barra(){
    var scroll = $(document).scrollTop();

   if($(window).width()>1200){
       if ($(".banner").length){
           if (scroll<= $(".banner").position().top + 100) {

               if ($("header").hasClass("barra_reducida") )$("header").removeClass("barra_reducida");
               if (!$("header").hasClass("barra_ampliada")) $("header").addClass("barra_ampliada");

           }else{
               if (!$("header").hasClass("barra_reducida")) $("header").addClass("barra_reducida");  
               if ($("header").hasClass("barra_ampliada")) $("header").removeClass("barra_ampliada");
           }
       }

       if ($(".interiores").length){
           if (scroll<= $(".interiores").position().top - 300) {

               if ($(".portada header").hasClass("barra_reducida") )$(".portada header").removeClass("barra_reducida");
               if (!$("header").hasClass("barra_ampliada")) $("header").addClass("barra_ampliada");

           }else{
               if (!$(".portada header").hasClass("barra_reducida")) $(".portada header").addClass("barra_reducida");  
               if ($("header").hasClass("barra_ampliada")) $("header").removeClass("barra_ampliada");
           }

       }


   }else if ($(window).width()>1000){

       if ($(".banner").length){
           if (scroll<= $(".banner").position().top + 100) {

               if ($("header").hasClass("barra_reducida") )$("header").removeClass("barra_reducida");
               if (!$("header").hasClass("barra_ampliada")) $("header").addClass("barra_ampliada");

           }else{
               if (!$("header").hasClass("barra_reducida")) $("header").addClass("barra_reducida");  
               if ($("header").hasClass("barra_ampliada")) $("header").removeClass("barra_ampliada");
           }
       }

       if ($(".interiores").length){
           if (scroll<= $(".interiores").position().top - 300) {

               if ($(".portada header").hasClass("barra_reducida") )$(".portada header").removeClass("barra_reducida");
               if (!$("header").hasClass("barra_ampliada")) $("header").addClass("barra_ampliada");

           }else{
               if (!$(".portada header").hasClass("barra_reducida")) $(".portada header").addClass("barra_reducida");  
               if ($("header").hasClass("barra_ampliada")) $("header").removeClass("barra_ampliada");
           }
       }
   }
}

document.addEventListener( 'DOMContentLoaded', function () {
   if ( $( "#banner-slider" ).length ) {

       new Splide( '#banner-slider', {
           autoplay: true,
           interval: 3000,
           type: "fade",
           rewind: true,
           perMove: 1,
           perPage: 1,
           pagination: false,
           arrows: false,
           classes: {
               arrows: 'splide__arrows your-class-arrows',
               arrow : 'splide__arrow crece_svg',
               prev  : 'splide__arrow--prev your-class-prev',
               next  : 'splide__arrow--next your-class-next',
           },
       } ).mount();
   }
   if ( $( "#banner-central" ).length ) {

       new Splide( '#banner-central', {
           autoplay: true,
           interval: 3000,
           type:"loop",
           perMove: 1,
           perPage: 1,
           arrows: false,
           pauseOnFocus: true,
           pauseOnHover: true,
       } ).mount();
   }
   if ( $( "#marcas" ).length ) {

       new Splide( '#marcas', {
           autoplay: true,
           arrows: false,
           pauseOnFocus: true,
           pauseOnHover: true,
           pagination: false,
           interval: 3000,
           width: '85%',
           perMove: 1,
           type: 'loop',
           perPage: 7,
           breakpoints: {
               1500: {
                   perPage: 6,
               },
               992: {
                   perPage: 5,
               },
               768: {
                   perPage: 4,
               },
               500: {
                   perPage: 3,
               },
               450: {
                   perPage: 2,
               },
           }
       } ).mount();
   }
} );