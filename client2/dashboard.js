$(window).ready(function() {
  $.getJSON("http://172.31.192.36:3000/getData", function(response) {
    for(var i = 0 ; i < response.length ; i++) {
      $("#dashboard-table").append(
        "<tr><td>"+response[i].deviceAlias+"</td><td>"+response[i].deviceIP+"</td><td>"+response[i].deviceStatus+"</td><td>"+response[i].lastRestart+"</td></tr>"
      );
    }
  });
});
