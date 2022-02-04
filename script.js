window.addEventListener("load", allForm);

function allForm() {
  const form = document.getElementById("form");
  const user = document.getElementById("usuario");
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");
  const senhaC = document.getElementById("senha-check");
  

  form.addEventListener("submit", e => {
    e.preventDefault();

    checkInputs();
       
  });

  function checkInputs() {
    const usuarioValue = user.value.trim();
    const emailValue = email.value.trim();
    const senhaValue = senha.value.trim();
    const senhaCValue = senhaC.value.trim();
    var valid = 0;

    if (usuarioValue === "") {
      setErrorFor(user, "Preencher campo usuário");
    } else {
      setSuccessFor(user);
      valid++;
    }

    if(emailValue === ''){
        setErrorFor(email, "Preencher campo e-mail");
    }else if(!emailCheck(emailValue)){
        setErrorFor(email, "E-mail inválido");
    }else {
        setSuccessFor(email);
        valid++;
    }

    if(senhaValue === ''){
        setErrorFor(senha, "Preencher campo senha");
    } else if(senha.value.length < 6){
        setErrorFor(senha, "Inserir mínimo de 6 caracteres");
    }else {
        setSuccessFor(senha);
        valid++;
    }

    if(senhaCValue === ''){
        setErrorFor(senhaC, "Preencher campo senha");
    } else if(senhaValue !== senhaCValue){
        setErrorFor(senhaC, "Senhas não correspondem");
    } else if(senhaC.value.length < 6){
        setErrorFor(senhaC, "Inserir mínimo de 6 caracteres");
    } else {
        setSuccessFor(senhaC);
        valid++;
    }
 
    if(valid == 4){
        alert("Cadastrado com sucesso")
    }else{
        alert("Preencha todos os campos")
    }

  }

  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "form-control error";
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = "form-control success";
  }


  function emailCheck(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }


}
