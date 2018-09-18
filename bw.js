$( function() {
	// local
	// var downloadLoggedInUrl = "http://bw.dev/downloadmanager/loggedin.php";
	// live
	var downloadLoggedInUrl = "http://biwermau.de/downloadmanager/loggedin.php";

	// Legal Notice
	$("#btn-notice").on("click", function (e) {
		e.preventDefault();
		// active? show it
		if( !$(this).hasClass("active") ) {
			$(this).addClass("active");
			$("#notice").addClass("active").css("height", "auto");
			scollToBottom();
		} // hide it
		else {
			$(this).removeClass("active");
			$("#notice").removeClass("active");
			closeIt( $("#notice") );
		}

	});

	// Info Box at start
	$("#info-box").on("click", function (e) {
		e.preventDefault();

		$(this).parent().animate( {opacity: 0}, 200, "linear", function() {
			// callback
			$("body").removeClass("info-start");
		});
	});

	// slide notice to close
	function closeIt ( item ) {

		item.css("height", "auto");

		item.animate( {height: 0}, 200, "linear", function() {
			//callback
			item.removeAttr("style");
		});
	}


	// scroll to bottom
	function scrollToBottom () {

	$('html, body').animate({
		scrollTop: $(document).height()-$(window).height()},
		200,
		"linear"
		);
	}

	// init placeholder plugin
	$('input, textarea').placeholder();


	//
	// LOGIN
	//
	// Form submit ajax
	$('#login-form').on("submit", function (e) {
		e.preventDefault();

		var username = $("#input-username").val();
		var password = $("#input-password").val();
		var errorBox = $('#login-form > #error-box');


		// input long enough?
		if ( username.length > 2 && password.length > 2 ) {


			var url = $(this).attr("action");
			var data = {
				"username" : username,
				"password" : password
			}

			$.ajax({
				url: url,
				type: "post",
				data: data,
				complete: function(data) {

					var status = (data.responseText === "true") ? true : false; // boolean

					if ( status ) {
						// true
						window.location.replace(downloadLoggedInUrl);

					} else {
						// show error
						errorBox.show();
					}
				}
			});
		} else {
			// show error
			errorBox.show();
		}

	});

	//
	//
	// Mobile
	// On init of subpage, scroll down to navi bottom
	//
	if ( $(window).width() < 960 ) {
		if ( $("body").hasClass("single") ) {
		// get bottom y pos of navi
			var scrollPos = $("#sidebar").height() + 40;

		// scroll to pos
			$(document).scrollTop( scrollPos );
		}
	}

	//
	//
	// Cookie
	// info-block on start
	// show or not?
	if ( $("body").hasClass("info-start") ) {
    $("body").removeClass("info-start");
	}

	//
	//
	// Cookie for Projects-Detail in single.php
	// back link -> prepear for scroll to current shown project
	if ( $("body").hasClass("single") ) {
		$(".link-back").on("click", function (e) {

			// write cookie with ID of Post
			var postId = $(this).attr("data-id");

			// rewrite cookie with postID
			$.cookie('bw_cookie_projects', postId, { expires: 1, path: '/' });
		});
	}

	//
	//
	//
	//
	if ( $("body").hasClass("category-projekte") ) {
		// read cookie
		if ( $.cookie('bw_cookie_projects') ) {

			// get pos of Project
			var postId = $.cookie('bw_cookie_projects');

			// scroll to project
			$(document).scrollTop( $("#"+postId).offset().top - 20 );

			// delete cookie
			$.removeCookie('bw_cookie_projects', { path: '/' });
		}

	}
	$("h1").inlinebackgrounds(Modernizr.boxshadow);

});
(function($){
    $.fn.inlinebackgrounds = function(bsTst, resetBg) {
      //webOs gives a false positive for boxshadows
      
      if (!bsTst) {
      	var ieData = "<div id='column'>";
      	ieData +=		"<hgroup>";
		ieData +=			"<h1>";
		ieData +=				"<span class='ie'>BiwerMau&nbsp;</span>";
		ieData +=			"</h1>";
		ieData +=			"<h2>";
		ieData +=				"<span class='ie'>Architekten BDA&nbsp;</span>";
		ieData +=			"</h2>";
		ieData +=			"</hgroup>";
		ieData +=		"<address>";
		ieData +=		"<span class='ie'><br/>St. Annenufer 5, Block Q&nbsp;<br/>";
		ieData +=			"20457 Hamburg, Germany&nbsp;<br/>";
		ieData +=			"T: +49.40.181.310.770&nbsp;<br/>";
		ieData +=			"F: +49.40.181.310.771&nbsp;<br/>&#109;&#97;&#105;&#108;&#64;&#98;&#105;&#119;&#101;&#114;&#109;&#97;&#117;&#46;&#100;&#101;&nbsp;<br/>";
		ieData +=			"www.biwermau.de&nbsp;<br/><br/>>>&nbsp;";
		ieData +=			"</span>";
		ieData +=		"</address>";
		ieData +=	"</div>";
      	$("#info-box").empty();
      	$("#info-box").html(ieData);
      	}
    }
  })(jQuery);

