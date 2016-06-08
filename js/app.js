$(document).ready(function() {
	$('form').submit(function(event) {
			$('.buylist').append('<li>' + '<i class="fa fa-check-circle-o fa-2x"></i>' + $('#iteminput').val() + '<i class="fa fa-trash fa-2x"></i>' + '</li>');
			$('input[type=text], textarea').val('');
			return false;
	});
	$('ul').on('click', '.fa-trash', function(event) {
		$(this).parent().css('background-color', '#e1e1e1');
		$(this).parent().fadeOut(200);
		setTimeout(function() {
			$(event.target).parent().remove();
		}, 1000);
	});

	$('ul').on('click', '.fa-check-circle-o', function(event) {
		$(this).parent().css('background-color', '#def1ed');
		$('.basketlist').append('<li>' + '<i class="fa fa-arrow-circle-o-left fa-2x"></i>' + $(this).parent().text() + '<i class="fa fa-trash fa-2x"></i>' + '</li>');
		$(this).parent().fadeOut(200);
		setTimeout(function() {
			$(event.target).parent().remove();
		},1000);
	});

	$('ul').on('click', '.fa-arrow-circle-o-left', function(event) {
		$(this).parent().css('background-color', '#e1e1e1');
		$('.buylist').append('<li>' + '<i class="fa fa-check-circle-o fa-2x"></i>' + $(this).parent().text() + '<i class="fa fa-trash fa-2x"></i>' + '</li>');
		$(this).parent().fadeOut(200);
		setTimeout(function() {
			$(event.target).parent().remove();
		}, 1000);
	});

		
	
});



