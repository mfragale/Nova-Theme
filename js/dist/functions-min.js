jQuery(function(){if($(".hamburger").on("click",function(e){e.preventDefault(),$(".hamburger").toggleClass("is-active"),$("#fullscreenmenu").toggleClass("is-active")}),$("body").keydown(function(e){27==e.which&&($(".hamburger").toggleClass("is-active"),$("#fullscreenmenu").toggleClass("is-active"))}),location.hash){const e=location.href.split("#");$('.nav a[href="#'+e[1]+'"]').tab("show")}$(".closeLocal").on("click",function(){$(".tab-pane").removeClass("active"),$('a[data-toggle="tab"]').removeClass("active")}),$('a[data-toggle="tab"]').on("click",function(){let e;const t=$(this).attr("href");e="#noLocalSelected"==t?location.href.split("#")[0]:location.href.split("#")[0]+t,history.replaceState(null,null,e)}),$(window).resize(function(){if($(window).width()<768){var e=$("body").height();$(".tab-pane").height(e)}else $(".tab-pane").height("auto")}).resize()});