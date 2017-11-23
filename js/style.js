$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 1) {
			
			$(".siteheader.stickyheader").css("background", "#F4EEEB");
			$('a.heading-link-center').fadeOut(100);
			$('a.heading-link-left').fadeOut(100);
			$(".wellthyarticleheader").css("color", "rgba(0,0,0,0)");
			$("p.articletitleappear").css("margin-top", "0.25rem");
			
	  } else {
			
			$(".siteheader.stickyheader").css("background", "transparent");
			$('a.heading-link-center').fadeIn(100);
			$('a.heading-link-left').fadeIn(100);
			$(".wellthyarticleheader").css("color", "#645D59");
			$("p.articletitleappear").css("margin-top", "3rem");
		}
  })
})