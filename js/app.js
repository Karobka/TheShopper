$(document).ready(function() {
	$("#addbutton").click(function() {
			$('.buylist').append('<li>' + '<i class="fa fa-check-circle-o fa-2x"></i>' + $('#iteminput').val() + '<i class="fa fa-trash fa-2x"></i>' + '</li>');
			$('input[type=text], textarea').val('');
	});
	$('ul').on('click', '.fa-trash', function(event) {
		$(this).parent().remove();
	});
		
	
});

//When user clicks add button we grab the values in the input feild and
//add them to a new li.