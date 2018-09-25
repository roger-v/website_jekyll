$('#proj_window').hide();

$(".projects_img").click(function(e){
  /*
  var $desc = $(this).parent().children('.desc');
  $("#proj_image").attr("src", $(this).parent().children('img').attr('src'));
  $("#proj_image").addClass("shadow");
  $("#project_view").html($desc.html());
  $("#backtotop").css({'display':'block'});
  
  $('html, body').animate({
        scrollTop: $("#project_view_container").offset().top
    }, 500);
    
  */
  show_project_window(this);
});

function show_project_window(obj) {
  var $short = $(obj).parent().children('.short');
  if (typeof $short.html() == "undefined") return;
  var $title = $(obj).parent().find('.proj_title');
  var $preview = $(obj).parent().find('.proj_preview'); 
  $("#proj_view").html($short.html());
  $("#proj_title").html($title.html());
  $("#proj_preview").html($preview.html());
  $("#proj_window").fadeIn("fast");
}

$(".nav-link").click(function(e){
  if (this.getAttribute("href") != null) return;
  var dest = '#' + $(this).html().trim();
  $('html, body').animate({
        scrollTop: $(dest).offset().top - $('nav').height()
    }, 500);
});

function scrollTo(str) {
  $('html, body').animate({
        scrollTop: $(str).offset().top - $('nav').height()
    }, 500);
}

$(window).scroll(function(e){
  var aboutTop = $("#about").position().top;
  var windowTop = $(window).scrollTop(); 
  var introTop = $("#intro").position().top;
  if (aboutTop - windowTop <= introTop) {
    $("#intro").css({"opacity":0});
  }
  else {
    $("#intro").css({"opacity":1});
  }
  
});

$("#close_proj_window").click(function(e){
  $("#proj_window").fadeOut("fast", function() {
    $("#proj_view").html("");
    $("#proj_title").html("");
    $("#proj_preview").html("");
  });
});

$(".carousel").carousel();
