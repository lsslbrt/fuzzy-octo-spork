$(document).ready(function () {
  $(window).scroll(function () {
  	var scroll = $(window).scrollTop();
	  if (scroll > 1) {
			
			$(".siteheader.stickyheader").css("background", "#F2EEEB");
			$('ul.nav-center').fadeOut(250);
			$('li.instagram').fadeOut(250);
			$(".wellthyarticleheader").css("color", "rgba(0,0,0,0)");
			$("p.articletitleappear").css("margin-top", "0rem");
			
	  } else {
			
			$(".siteheader.stickyheader").css("background", "transparent");
			$('ul.nav-center').fadeIn(250);
			$('li.instagram').fadeIn(250);
			$(".wellthyarticleheader").css("color", "#525151");
			$("p.articletitleappear").css("margin-top", "2rem");
		}
  })
})