$(document).ready (function() {
	$(".addbutton").click (function() {
		alert ("you clicked it");
		$("#newiteminput").val(function() {
			$(".itemwords").append("this");
		});
	});
	
});