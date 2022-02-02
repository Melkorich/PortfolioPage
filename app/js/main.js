$(function(){

  //show more btn
  $('.portfolio__item').slice(0, 6).show();
  $('.view-more-btn').on('click', function() {
    $('.portfolio__item:hidden').slice(0, 3).slideDown();

    if ($('.portfolio__item:hidden').length == 0) {
      $('.view-more-btn').fadeOut('slow');
    }
  })

  //smooth scroll
  $("a[href^='#']").click(function(){
          var _href = $(this).attr("href");
          $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1000);
          return false;
  });
});

//preloader
// const loader = document.getElementById('preloader');

// window.addEventListener('load', function() {
//   loader.style.display = 'none';
// })

//preloader with post-effect
document.body.onload = function () {

  setTimeout(function () {

    let preloader = document.getElementById('preloader');
    if (!preloader.classList.contains('hidden')) {
      preloader.classList.add('hidden');
    }
  }, 600);
}

//inputMask
const form = document.querySelector('.form');
let inputTel = document.querySelectorAll("input[type='tel']");

let im = new Inputmask("+7 (999) 999-99-99");
im.mask(inputTel);


$(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
