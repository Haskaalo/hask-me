$( document ).ready(function() {
   $('#load').fadeOut();
   window.setTimeout( first, 1500 );
});

function first() {
	$('#ever').fadeIn();
	$( "#firstbgvid" ).show();
	$('#firstbgvid').get(0).play();
	window.setTimeout( remfirst, 3500 );
	window.setTimeout( second, 4000 );
}
function remfirst() {
	$('#ever').fadeOut();
	$('#firstbgvid').remove();
}
function second() {
	$("body").css("background-color","white");
	$( "#howsecond" ).show();
	window.setTimeout( third, 550 );
}
function third() {
	$( "#howsecond" ).hide();
	$("body").css("background-color","black");
	$( "#bigthird" ).show();
	window.setTimeout( fourth, 550 );
}
function fourth() {
	$( "#bigthird" ).hide();
	$( "#fourthweb" ).show();
	$( "#fourthbgvid" ).show();
	$('#fourthbgvid').get(0).play();
	window.setTimeout( fifthrem, 1500 );
}
function fifthrem() {
	$( "#fourthweb" ).hide();
	$('#fourthbgvid').remove();
	window.setTimeout( fifth, 100 );
}
function fifth() {
	$( "#imean" ).show();
	$("body").css("background-color","black");
	window.setTimeout( thousand, 1500 );
}
function thousand() {
	$( "#imean" ).hide();
	$( "#forgotbgvid" ).show();
	$('#forgotbgvid').get(0).play();
	$( "#yea" ).show();
	window.setTimeout( probending, 2000 );
}
function probending() {
	$( "#yea" ).hide();
	$( "#justlikehow" ).show();
}
