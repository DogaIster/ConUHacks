$(window).ready(function() {
  $.getJSON( "http://172.31.192.36:3000/getData", function( data ) {
    alert(data);
  });
});
