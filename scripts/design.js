
$(document).ready(function () {
$('.welcometext')
  .transition('fade')
;
window.setTimeout( fading, 2000 ); // set welcome text for 2 secs then fade out
});

function fading() { // 
    $('.welcometext')
  .transition('fade')
;
window.setTimeout( everything, 1000 ); // fade out then fade 1 sec later.
};

function everything () {
    $( ".everything" ).show();
    // side bar stuff
    $('.ui.sidebar')
  .sidebar('toggle')
;
}