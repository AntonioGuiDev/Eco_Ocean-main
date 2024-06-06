// js/validation.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nome = document.getElementById('idNome');
    const dataNasc = document.getElementById('idDataNasc');
    const email = document.getElementById('idE-mail');
    const genero = document.getElementById('idgenero');
    const cidade = document.getElementById('idCidade');
    const bairro = document.getElementById('idBairro');
  
    form.addEventListener('submit', (event) => {
      let valid = true;
  
      // Verificar nome completo
      if (!validateNome(nome.value)) {
        valid = false;
        alert('Nome completo é obrigatório e deve ter pelo menos 3 caracteres.');
      }
  
      // Verificar data de nascimento
      if (!validateDataNasc(dataNasc.value)) {
        valid = false;
        alert('Data de nascimento inválida.');
      }
  
      // Verificar e-mail
      if (!validateEmail(email.value)) {
        valid = false;
        alert('E-mail inválido.');
      }
  
      // Verificar gênero
      if (!validateGenero(genero.value)) {
        valid = false;
        alert('Gênero é obrigatório.');
      }
  
      // Verificar cidade
      if (!validateCidade(cidade.value)) {
        valid = false;
        alert('Cidade é obrigatória.');
      }
  
      // Verificar bairro
      if (!validateBairro(bairro.value)) {
        valid = false;
        alert('Bairro é obrigatório.');
      }
  
      if (!valid) {
        event.preventDefault();
      }
    });
  
    function validateNome(nome) {
      return nome.length >= 3;
    }
  
    function validateDataNasc(data) {
      const hoje = new Date();
      const dataNascimento = new Date(data);
      return data && dataNascimento <= hoje;
    }
  
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  
    function validateGenero(genero) {
      return genero.trim() !== '';
    }
  
    function validateCidade(cidade) {
      return cidade.trim() !== '';
    }
  
    function validateBairro(bairro) {
      return bairro.trim() !== '';
    }
  });
  