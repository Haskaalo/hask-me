$('document').ready(function (){
	// when on hover set cursor point
	$('#click').css( 'cursor', 'pointer' );


	$( "#click" ).click(function() {
	$('html, body').animate({scrollTop: $("#container2").offset().top}, 2000);
});

 $( "#shorten" ).click(function() {
 	var bla = $('#inputc').val();
 	var encode = encodeURIComponent(bla);
 	console.log('encoding: ' + bla + ' result: ' + encode)
 	$.get( "./linkshortapi?id=" + encode, function( data ) {
 		$('#messages').append($('<p>').text(data));
 	});
 })
});