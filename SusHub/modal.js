// Obtém o botão e o modal
const BtnLogin = document.getElementById("BtnLogin");
const BtnRegister = document.getElementById("BtnRegister");
const ModalLogin = document.getElementById("ModalLogin");
const ModalRegister = document.getElementById("ModalRegister");

// Obtém o elemento de fechar o modal
const closeModalLogin = document.getElementById("login-btn-close")

// Quando o usuário clica no botão, abra o modal
BtnRegister.onclick = function() {
  ModalRegister.style.display = "block";
}

BtnLogin.onclick = function() {
  ModalLogin.style.display = "block";
}

// Quando o usuário clica no botão de fechar, feche o modal
closeModal.onclick = function() {
  ModalRegister.style.display = "none";
}
