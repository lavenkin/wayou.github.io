$(function(){var t=$(window).width()<768;$(".material-preloader").hide();i();var e=$("html, body"),a=$("#main"),n={prefetch:true,pageCacheSize:4,blacklist:"#toc a,.post-content a,.no-smoothstate",onStart:{duration:250,render:function(t,n){$(".material-preloader").show();e.animate({scrollTop:0});a.addClass("is-exiting");s.restartCSSAnimations()}},onEnd:{duration:0,render:function(t,n,s){$(".material-preloader").hide();a.removeClass("is-exiting");a.html(s);e.css("cursor","auto");setTimeout(function(){i();if(window["DUOSHUO"]&&$("#ds-thread")){DUOSHUO.EmbedThread($("#ds-thread")[0])}})}}},s=a.smoothState(n).data("smoothState");function i(){$(".material-preloader").hide();l();f();o();r()}function o(){var e=$(".nav-indicator","nav"),a=$(".menu-wrapper","nav"),n=false,s,i=$("ul.menus li.active a"),o;f(true);$(".menu-wrapper ul.menus li").on("mousemove",r);$(".menu-wrapper").on("mouseleave",l);function r(r){if(!t){s=r.target?$(r.target):r;if(!s.is("li")){s=s.parent("li")}var l=s.offset().left-a.offset().left,f=s.width();if(0!=i.length||n){e.css({transform:"translate3d("+l+"px, 0, 0) scaleX("+f/100+")"})}else{clearTimeout(o),e.css({transform:"translate3d("+(l+f/2)+"px, 0, 0) scaleX(0.001)"});setTimeout(function(){e.addClass("animate-indicator").css({transform:"translate3d("+l+"px, 0, 0) scaleX("+f/100+")"})},10)}n=true}}function l(l){if(!t){if(0==i.length){var f=s.offset().left-a.offset().left,c=s.width();e.css({transform:"translate3d("+(f+c/2)+"px, 0, 0) scaleX(0.001)"});o=setTimeout(function(){e.removeClass("animate-indicator")},200)}else{r(i)}n=false}}function f(t){if(i.length>0){var n=i.offset().left-a.offset().left;e.css({transform:"translate3d("+(n+i.width()/2)+"px, 0, 0) scaleX(0.001)"});setTimeout(function(){e.addClass("animate-indicator"),r(i)},100)}}}function r(){if(!t){$("#toc").tocify({selectors:"h2,h3",extendPage:false,theme:"none"})}}function l(){$(".nav-toggle-icon").click(function(){$(this).toggleClass("active").find(".material-hamburger").toggleClass("opened");$(".menu-wrapper").toggleClass("active");$(".logo").toggleClass("fixed")})}function f(){Waves.attach(".wave");Waves.attach(".pagination a");Waves.attach(".pager .pager-item",["waves-button"]);Waves.attach(".btn",["waves-button"]);Waves.init()}});