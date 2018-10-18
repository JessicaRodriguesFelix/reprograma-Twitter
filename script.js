$(document).ready(function () {

  $("#btn-submit").click(function (e) {
    e.preventDefault();
    insereTweet();

  });

    function insereTweet() {
      $(".tuites").prepend(`
    <p>${$("#form").val()}</p>
      `)
    }

      function pegaNumeroCaracteres(){
        let charSobrando = 280 - $("#form").val().length;
        return $(".contador").text(`Você ainda tem ${charSobrando} caracteres`);
      }

    $("#form").keyup(function(){
      pegaNumeroCaracteres()

  });

})

/* estilizar tweets com Boots*/
/* adicionar data com New Date */
/* resetar o form (textarea) */
/* trocar o texto de cor
    200 char amarelo
    50 char laranja 
    0 char vermelho*/