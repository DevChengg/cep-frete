# 📦 Consulta de Frete por CEP

Este é um projeto em **Next.js** que permite ao usuário digitar um **CEP**, consultar os dados via **API do ViaCEP**, e exibir o valor estimado de frete baseado no estado (`UF`).

---

## 🚀 Funcionalidades

- Entrada de CEP com validação automática
- Consulta à API pública do [ViaCEP](https://viacep.com.br/)
- Cálculo de frete com base na UF retornada
- Mensagens de erro amigáveis e loading
- Estilizado com TailwindCSS

---

## 🛠️ Tecnologias utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)

---

## 📂 Como executar o projeto

```bash
# Instalar dependências
npm install

# Rodar localmente
npm run dev

-- Acesse em: http://localhost:3000

## ✉️ Exemplo de uso
Digite um CEP válido (ex: 01001000)

Clique em "Consultar CEP"

Veja o logradouro, cidade e o valor estimado de frete
