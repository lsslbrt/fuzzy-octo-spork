$(document).ready(function () {
  $(window).scroll(function () {
  	var scroll = $(window).scrollTop();
			
			$(".wellthyarticleheadertext").css("opacity", 1 - $(window).scrollTop() / 75);
		
		
  	if (scroll > 452) {
			
            $(".stickyheader").addClass('stickycolor')
			$('ul.nav-center').fadeOut(250);
			$('li.instagram').fadeOut(100);
			$("p.articletitleappear").css("margin-top", "0rem");
			
	  } else {
			
            $(".stickyheader").removeClass('stickycolor')
			$('ul.nav-center').fadeIn(250);
			$('li.instagram').fadeIn(100);
			$("p.articletitleappear").css("margin-top", "2rem");
		}
  })
})