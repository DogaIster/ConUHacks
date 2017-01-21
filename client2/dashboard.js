$(window).ready(function() {
  $.getJSON( "http://172.31.192.36:3000/getData", function(response) {
    for(var i = 0 ; i < response.length ; i++) {
      $("#dashboard-table").append(
        "<tr><td>"+response[i].computerNumber+"</td></tr>"
      );
    }
  });
});
