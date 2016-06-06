$(document).ready(function() {
	$("#addbutton").click(function() {
		$("input").val(function() {
			$(".buylist").append("<li>Blah</li>");
			
		});
		
	});
	$(".fa").click(function() {
		$(this).parent().remove();
	});
		
	
});