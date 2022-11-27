function validar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "Luciano" && senha == "123"){
        alert('Sucesso');
    }else{
        if(login == "Luciano" && senha != "123"){
            alert("Senha inválido");
        }else if(login != "Luciano" && senha == "123"){
            alert("Usuário inválido");
        }else{
            alert("Usuário e senha inválidos");
        }
    }


}