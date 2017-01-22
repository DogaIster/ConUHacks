$(window).ready(function() {
  $.getJSON("http://172.31.192.36:3000/getData", function(response) {
    for(var i = 0 ; i < response.length ; i++) {

      $("#dashboard-table").append(
        "<tr><td>"+response[i].alias+"</td><td>"+response[i].ip+"</td><td>"+response[i].status+"</td><td>"+response[i].last_restart+"</td><td>"+response[i].last_restart+"</td><td>"+response[i].last_restart+"</td></tr>"
      );
    }
  });
});
