# Documentação Técnica — Entrega Unidade 1
**Projeto:** Plataforma HTML5 — Pedro Block
**Data:** 2025-10-02

---

## 1. Wireframes (principais páginas)
- **Home (index.html):** hero, destaques de projetos, galeria, depoimentos, métricas (canvas), sidebar newsletter.
- **Página de Projeto (projetos.html):** lista de projetos, descrição detalhada, formulário de inscrição.
- **Voluntariado (voluntariado.html):** formulário completo de cadastro de voluntários (dados pessoais, endereço, habilidades, disponibilidade).
- **Contato (contato.html):** formulário institucional com anexos e seleção de assunto.

> Wireframes simples: caixas nomeadas para cada bloco (Header, Hero, Cards, Sidebar, Footer).

---

## 2. Especificação dos formulários
### Cadastro de voluntário (voluntariado.html)
- Campos principais: nome, CPF (mask + pattern), data nascimento, e-mail, telefone, CEP (preenchimento via ViaCEP), logradouro, número, complemento, bairro, cidade, estado, habilidades (checkboxes), disponibilidade (checkboxes dias + radio turno), aceite termos (required).
- Validações HTML5: `required`, `type="email"`, `pattern` para CPF, `min`/`max` para datas, `maxlength` onde aplicável.
- Máscaras: CPF, Telefone, CEP (implementadas em `js/forms.js`).
- Regras extras: bloquear cadastro se idade < 16 (exemplo em JS).

### Inscrição em projetos (projetos.html)
- Campos: nome, e-mail, projeto (select), motivação (minlength), experiência (radio + textarea condicional), anexo CV (accept .pdf .doc .docx).
- Validação: `required`, `minlength` para motivação, `accept` para arquivos.

### Contato institucional (contato.html)
- Campos: nome, e-mail, telefone (opcional), assunto (select), mensagem (textarea maxlength 2000), anexos (input file, multiple).
- Validação: `required` para campos essenciais e `type="email"`.

### Newsletter (index.html aside)
- Campos: e-mail (`type="email" required`), preferências (checkbox group).

---

## 3. Documentação dos gráficos e visualizações (js/charts.js)
- **Gráfico de Pizza (`chart-resources`)**: mostra distribuição percentual de recursos por projeto. Implementado em Canvas 2D puro no arquivo `js/charts.js`. Dados de exemplo: [40,30,20,10].
- **Gráfico de Linha (`chart-volunteers`)**: evolução mensal do número de voluntários. Eixo X: meses; Eixo Y: número de voluntários.
- **Gráfico de Barras (`chart-regions`)**: impacto por região (número de atendimentos ou beneficiários por região).

**Observações:** para produção, recomendo Chart.js ou D3.js para interatividade e responsividade. Canvas puro atende ao requisito mínimo.

---

## 4. Relatório de validação HTML (W3C)
- Cada arquivo HTML deve ser validado em https://validator.w3.org/.
- Recomenda-se corrigir avisos relacionados a: acessibilidade (labels faltantes), atributos `alt` em imagens, e uso de `lang` no elemento `<html>` (já presente).
- Neste pacote incluí os arquivos preparados para validação; se quiser, posso rodar validações automáticas e gerar um PDF com os resultados.

---

## 5. Assets e Recursos
- **Imagens:** 20 imagens de galeria (placeholders incluídos em `assets/img/`): `gallery-01.jpg` ... `gallery-20.jpg` e `gallery-01.webp` ... (webp gerado quando possível).
- **Vídeo:** `assets/video/institucional.mp4` — placeholder (arquivo pequeno ou link a ser substituído).
- **Áudio:** `assets/audio/depoimento1.mp3` — placeholder.
- **Fontes web:** recomendações: *Inter*, *Roboto*, *Open Sans* (usar via Google Fonts/em CSS).

---

## 6. Entregáveis incluídos neste pacote
- Código-fonte completo (pasta raiz com HTML, css, js)
- Pasta `/assets/` com imagens, vídeo e áudio placeholders
- Documento de especificação: `docs/documentacao_tecnica.md`
- (Tentativa de gerar PDF abaixo — se disponível no ambiente, `docs/documentacao_tecnica.pdf`)

---
