
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

           //Clase para cambiar el svg que quieras, CUIDADO, solo medidas de 40x40px
           //        arrowPath: 'M39.7,19.4L27.3,6.9c-0.3-0.3-0.9-0.3-1.2,0s-0.3,0.9,0,1.2l11.1,11.1H0.9C0.4,19.2,0,19.5,0,20s0.4,0.8,0.8,0.8h36.3L26.1,31.9c-0.3,0.3-0.3,0.9,0,1.2c0.2,0.2,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2l12.5-12.5C40.1,20.3,40.1,19.7,39.7,19.4z',

           // Se mueva de manera automática, si está en hover no cuenta el tiempo y no se mueve
           autoplay: true,

           // intervalo de tiempo de movimiento
           interval: 3000,

           // para que gire
           type: "fade",

           // Esta propiedad sirve de rebonidador. Esta opción se ignora en el modo "loop"
           rewind: true,

           //el movimiento sea de 1
           perMove: 1,

           // muestra 1 elementos por página 
           perPage: 1,

           // bolitas que muestran la cantidad de páginas
           pagination: false,

           // Felchas desactivada
           arrows: false,

           // Clases para hacer cambios en las flechas
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