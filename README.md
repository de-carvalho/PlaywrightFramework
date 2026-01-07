# Projeto de Automação de UI com Playwright

Este projeto tem como objetivo realizar **testes automatizados de interface (UI)** utilizando o **Playwright**, garantindo a qualidade e o correto funcionamento da aplicação web.

---

## 🧰 Tecnologias utilizadas
- **Playwright**
- **JavaScript**

---

## ⚙️ Configuração do projeto
O arquivo `playwright.config.js` é responsável por definir as **configurações padrão** da execução dos testes, como:
- browsers utilizados
- timeout
- baseURL
- geração de relatórios
- execução em modo headless ou não

---

## 🚀 Como executar o projeto

### 1️⃣ Instalar as dependências
Após clonar o repositório, execute:
```bash
npm install


### Executar os testes automatizados
npx playwright test

### 📊 Relatórios
npx playwright show-report

### 📁 Estrutura do projeto
tests/ → contém os testes automatizados

playwright.config.js → configurações globais do Playwright

package.json → dependências e scripts do projeto
