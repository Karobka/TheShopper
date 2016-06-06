$(document).ready(function() {
	$("#addbutton").click(function() {
		$("input").val(function() {
			$("ul").append("<li>crap</li>");
			alert($(this).val());
		});
		
	});
		
	
});