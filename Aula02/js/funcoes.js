function verificaNome(){
    var nome,resposta;
    nome = document.getElementById("nome").value;
    resposta = document.getElementById("resposta");
    if(nome){
        alert("Nome: "+nome+" informado com sucesso!");
        resposta.innerHTML="<h2>Nome: "+nome+" informado com sucesso!</h2>";
        //document.write("Nome: "+nome+" informado com sucesso!");
    }else {
        alert("Nome não informado");
    }
}