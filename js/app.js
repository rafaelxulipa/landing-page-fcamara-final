// Scroll suave para link interno
$('a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('a').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});

// Debounce do Lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// Animação ao Scroll
(function(){
	var $target = $('.anime'),
			animationClass = 'anime-start',
			offset = $(window).height() * 3/4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 200));
})();

var apptForm = document.getElementById("apptForm");
var contactNumber = document.getElementById("contactNumber");

apptForm.addEventListener('submit', function (event) {
    if (validator.isPhoneNumber(contactNumber.value)) {
      contactNumber.className = "valid";
      contactNumber.style.borderColor = "lightgreen";
    } else {
      contactNumber.className = "invalid";
      contactNumber.style.borderColor = "red";
    }
    // interromper o evento de sua ação padrão: enviar o formulário (para nossa validação, o envio não é desejado)
    event.preventDefault();
});


$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('a[href="#top"]').fadeIn();
        } else {
            $('a[href="#top"]').fadeOut();
        }
    });

    $('a[href="#top"]').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});