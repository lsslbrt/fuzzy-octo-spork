$(document).ready(function () {
  $(window).scroll(function () {
  	var scroll = $(window).scrollTop();
			
			$(".wellthyarticleheadertext").css("opacity", 1 - $(window).scrollTop() / 75);
		
		
  	if (scroll > 452) {
			
			$(".siteheader.stickyheader").css("background-color", "#4745D1");
			$('ul.nav-center').fadeOut(250);
			$('li.instagram').fadeOut(100);
			$("p.articletitleappear").css("margin-top", "0rem");
			
	  } else {
			
			$(".siteheader.stickyheader").css("background-color", "transparent");
			$('ul.nav-center').fadeIn(250);
			$('li.instagram').fadeIn(100);
			$("p.articletitleappear").css("margin-top", "2rem");
		}
  })
})