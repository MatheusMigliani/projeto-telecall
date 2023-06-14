// Evento de envio do formulário de login
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    // Obtém os valores dos campos de login e senha
    var username = document.getElementById("user-login").value;
    var password = document.getElementById("senha-login").value;
  
    // Verifica se as informações de login são válidas
    if (loginUser(username, password)) {
      // Exibe uma mensagem de sucesso usando o Sweet Alert
      Swal.fire({
        icon: "success",
        title: "Sucesso!",
        text: "Login realizado com sucesso!",
        showConfirmButton: false,
        timer: 2000
      }).then(function() {
        // Redireciona o usuário para a página de "submit" após a mensagem de sucesso
        redirectToSubmitPage();
      });
    } else {
      // Se as informações de login não forem válidas, exibe uma mensagem de erro usando o Sweet Alert
      Swal.fire({
        icon: "error",
        title: "Erro!",
        text: "Usuário ou senha inválidos.",
        showConfirmButton: false,
        timer: 2000
      });
    }
  });
  
  // Função para redirecionar o usuário para a página de "submit"
  function redirectToSubmitPage() {
    window.location.href = "index.html";
  }
  
  // Função para verificar se as informações de login são válidas
  function loginUser(username, password) {
    // Obtém os registros de login do localStorage
    var loginRecords = getLoginRecords();
  
    // Percorre os registros e verifica se há uma correspondência com as informações fornecidas
    for (var i = 0; i < loginRecords.length; i++) {
      if (
        loginRecords[i].username === username &&
        loginRecords[i].password === password
      ) {
        return true; // Retorna true se houver correspondência
      }
    }
  
    return false; // Retorna false se não houver correspondência
  }
  
  // Função para obter os registros de login do localStorage
  function getLoginRecords() {
    // Verifica se o localStorage está disponível e se existem registros salvos
    if (typeof(Storage) !== "undefined" && localStorage.getItem("loginRecords")) {
      // Obtém os registros de login do localStorage e converte para um objeto JavaScript
      return JSON.parse(localStorage.getItem("loginRecords"));
    } else {
      // Se não houver registros, retorna um array vazio
      return [];
    }
  }
  
  