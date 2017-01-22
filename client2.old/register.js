$(document).ready(function() {
  $("button#registerBtn").click(function(e) {
    e.preventDefault();

    var registerIpRaw = $("input[name='register-ip']").val(),
      registerAliasRaw = $("input[name='register-alias']").val();

    var patt = new RegExp("[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}");
    if(!patt.test(registerIpRaw)) {
      alert("Invalid IP address.");
      return false;
    }

    patt = new RegExp("[a-zA-Z0-9-_]{1,15}");
    if(!patt.test(registerAliasRaw)) {
      alert("Invalid alias.");
      return false;
    }

    $.post("http://172.31.192.36:3000/regComp", { registerIp: registerIpRaw, registerAlias: registerAliasRaw }, function( data ) {
      console.log(data);
    });

  });

});
