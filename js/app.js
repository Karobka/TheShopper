$(document).ready(function() {
	$('form').submit(function() {
			$('.buylist').append('<li>' + '<i class="fa fa-check-circle-o fa-2x"></i>' + $('#iteminput').val() + '<i class="fa fa-trash fa-2x"></i>' + '</li>');
			$('input[type=text], textarea').val('');
			return false;
	});
	$('ul').on('click', '.fa-trash', function(event) {
		$(this).parent().css('background-color', 'yellow');
		$(this).parent().fadeOut(200);
		setTimeout(function() {
			$(event.target).parent().remove();
		}, 1000);
	});

	$('ul').on('click', '.fa-check-circle-o', function(event) {
		$(this).parent().css('background-color', 'blue');
		$('.basketlist').append('<li>' + '<i class="fa fa-arrow-circle-o-left fa-2x"></i>' + $(this).parent().text() + '<i class="fa fa-trash fa-2x"></i>' + '</li>');
		$(this).parent().fadeOut(200);
		setTimeout(function() {
			$(event.target).parent().remove();
		},1000);
	});

	$('ul').on('click', '.fa-arrow-circle-o-left', function(event) {
		$(this).parent().css('background-color', 'grey');
		$('.buylist').append('<li>' + '<i class="fa fa-check-circle-o fa-2x"></i>' + $(this).parent().text() + '<i class="fa fa-trash fa-2x"></i>' + '</li>');
		$(this).parent().fadeOut(200);
		setTimeout(function() {
			$(event.target).parent().remove();
		}, 1000);
	});

		
	
});

//When user clicks add button we grab the values in the input feild and
//add them to a new li.

//When user clicks on check button we copy the text of the list item and 
//add it to a new list item on the basket list.

