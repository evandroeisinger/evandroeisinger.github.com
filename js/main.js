var Main = (function() {
	
	var $container = $('.pages'),						
		$left 	= $container.find('.page.left'),
		$middle = $container.find('.page.middle'),
		$right 	= $container.find('.page.right'),
		$open 	= $left.find('.open'),
		$close  = $left.find('.close'),

		init = function() {

			events();

		},
		events = function() {

			$open.on('click', function(e) {

				open();
				return false;

			});
			$close.on('click', function(e) {

				close();
				return false;

			});
		},
		open = function() {

			$container.addClass('open');

		},
		close = function() {

			$container.removeClass('open');

		};

	return { init : init };

})();

$(function() { Main.init(); });