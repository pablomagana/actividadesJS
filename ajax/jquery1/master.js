$(document).ready(function() {
  $("#validar").on("click",function() {
    // console.log($("#username").val());
    // console.log($("#passwd").val());
      $.ajax(
      {
        type:"POST",
        url:"server.php",
        data:{
          user:$("#username").val(),
          passwd:$("#passwd").val()
        },
        success:function(response)
        {
          console.log(response);
          $("#resultado").text(response);
          if(response=="OK"){
            $("#resultado").css("color","blue");
            return;
          }
          $("#resultado").css("color","red");

        },
        error:function(error)
        {
          alert("fallo al validar usuario y contraseña. Puede que tengamos problemas internos, lo estamos investigando")
          console.log(error);
        }
      });
  })
})
