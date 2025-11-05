/**
 * js/masks.js
 * * Este script aplica máscaras de formatação aos campos de input no cadastro.html
 * para CPF, Telefone e CEP.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Funções de Formatação (Masks)

  // Máscara para CPF (000.000.000-00)
  const maskCPF = (value) => {
    return value
      .replace(/\D/g, "") // Remove tudo que não é dígito
      .replace(/(\d{3})(\d)/, "$1.$2") // Coloca ponto após o 3º dígito
      .replace(/(\d{3})(\d)/, "$1.$2") // Coloca ponto após o 6º dígito
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2") // Coloca hífen após o 9º dígito
      .substring(0, 14); // Limita o tamanho
  };

  // Máscara para Telefone ((00) 00000-0000 ou (00) 0000-0000)
  const maskTelefone = (value) => {
    value = value.replace(/\D/g, ""); // Remove tudo que não é dígito

    // Máscara de 8 ou 9 dígitos para o corpo do número
    if (value.length > 10) {
      // Celular: (00) 90000-0000
      value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
    } else if (value.length > 6) {
      // Fixo/Padrão: (00) 0000-0000
      value = value.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
    } else if (value.length > 2) {
      // Apenas o DDD: (00)
      value = value.replace(/^(\d{2})(\d)/, "($1) $2");
    } else if (value.length > 0) {
      // Apenas o primeiro dígito do DDD: (0
      value = value.replace(/^(\d*)$/, "($1");
    }

    return value.substring(0, 15); // Limita o tamanho máximo a (99) 99999-9999
  };

  // Máscara para CEP (00000-000)
  const maskCEP = (value) => {
    return value
      .replace(/\D/g, "") // Remove tudo que não é dígito
      .replace(/^(\d{5})(\d)/, "$1-$2") // Coloca hífen após o 5º dígito
      .substring(0, 9); // Limita o tamanho
  };

  // 2. Aplicação das Máscaras (Binding)

  const inputCPF = document.getElementById("cpf");
  const inputTelefone = document.getElementById("telefone");
  const inputCEP = document.getElementById("cep");

  // Listener para o CPF
  if (inputCPF) {
    inputCPF.addEventListener("input", (e) => {
      e.target.value = maskCPF(e.target.value);
    });
  }

  // Listener para o Telefone
  if (inputTelefone) {
    inputTelefone.addEventListener("input", (e) => {
      e.target.value = maskTelefone(e.target.value);
    });
  }

  // Listener para o CEP
  if (inputCEP) {
    inputCEP.addEventListener("input", (e) => {
      e.target.value = maskCEP(e.target.value);
    });
  }
});
