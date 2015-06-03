$(document).ready(function(){
		$("#button1").click(function(){
			$("#logo1").toggle();
			$("#logo2").toggle();
		});
	});
$(document).ready(function() {
    $('#button2').click(function() {
        $('#button1').attr('style','color: green;');
		$('#button2').attr('style','color: blue;');
		$('#button3').attr('style','color: yellow;');
		$('h1').attr('style','font-family: verdana, sans-serif;');
    });
});



$(document).ready(function() {
    $('#button3').click(function() {
		$('#mainnav').attr('style','width: 800px; opacity: 0.75');		
		
    });
});