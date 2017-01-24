window.onload = function() {
	about = document.getElementById("about-icon");
	work = document.getElementById("work-icon");
	contact = document.getElementById("contact-icon");

	document.addEventListener("scroll", function() {
	var scrollPos = $(window).scrollTop();
	if (scrollPos >400 && scrollPos <= 1200) {
		about.className = "col black black2";
	}else {
		about.className = "col black";
	}
	if(scrollPos > 1200 && scrollPos <= 2000) {
		work.className = "col black black2";
	} else {
		work.className = "col black";
	}
	if (scrollPos > 2000) {
		contact.className = "col black black2";
	} else {
		contact.className = "col black";
	}
});
}

$(document).ready(function(){
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

    $("#divProject1").hover(function(){
        $("#projectName1").show(500)
    }, function() {
    	$("#projectName1").hide(500);
    });

     $("#divProject2").hover(function(){
        $("#projectName2").show(500)
    }, function() {
    	$("#projectName2").hide(500);
    });

    $("#divProject3").hover(function(){
        $("#projectName3").show(500)
    }, function() {
    	$("#projectName3").hide(500);
    });

    $("#divProject4").hover(function(){
        $("#projectName4").show(500)
    }, function() {
    	$("#projectName4").hide(500);
    });
    $("#divProject5").hover(function(){
        $("#projectName5").show(500)
    }, function() {
    	$("#projectName5").hide(500);
    });
    $("#divProject6").hover(function(){
        $("#projectName6").show(500)
    }, function() {
    	$("#projectName6").hide(500);
    });
});