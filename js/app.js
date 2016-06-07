$(document).ready(function() {
	$("#addbutton").click(function() {
			$('.buylist').append('<li>' + '<i class="fa fa-check-circle-o fa-2x"></i>' + $('#iteminput').val() + '<i class="fa fa-trash fa-2x"></i>' + '</li>');
			$('input[type=text], textarea').val('');
	});
	$('ul').on('click', '.fa-trash', function(event) {
		$(this).parent().css('color', '#ffe6ff');
		$(this).parent().delay(800).remove();
	});
	$('ul').on('click', 'fa-check-circle-o', function(event) {
		$(this).prev('li').append('.basketlist', '<li>' + '<i class="fa fa-arrow-circle-o-left fa-2x"></i>' + $(this).val() + '<i class="fa fa-trash fa-2x"></i>' + '</li>');
	});

		
	
});

//When user clicks add button we grab the values in the input feild and
//add them to a new li.

//When user clicks on check button we copy the text of the list item and 
//add it to a new list item on the basket list.

