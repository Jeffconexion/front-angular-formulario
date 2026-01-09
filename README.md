# Cadastro e Consulta de Clientes – Angular 19+

Este projeto foi desenvolvido como parte de um treinamento avançado em Angular 19+ e tem como objetivo demonstrar habilidades práticas na construção de aplicações modernas, responsivas e escaláveis utilizando o ecossistema Angular.

## ✨ Visão Geral

O sistema permite o cadastro e a consulta de clientes, com interface intuitiva, validações de formulário, integração com a BrasilAPI para seleção dinâmica de estados e municípios, e persistência local dos dados (localStorage). O layout utiliza Angular Material e Flex Layout para garantir responsividade e experiência de usuário aprimorada.

## 🚀 Funcionalidades

- **Cadastro de Clientes:**
  - Nome, e-mail, data de nascimento, CPF (com máscara), UF e município.
  - Validações de campos obrigatórios e formatos.
  - Seleção dinâmica de UF e municípios via BrasilAPI.
- **Consulta de Clientes:**
  - Busca por nome.
  - Listagem dos clientes cadastrados.
  - Opções para editar ou remover clientes.
- **Persistência Local:**
  - Todos os dados são armazenados no `localStorage`, dispensando backend.
- **UI Moderna:**
  - Utilização de Angular Material, Flex Layout e ícones.
  - Design responsivo e agradável.

## 🛠️ Tecnologias Utilizadas

- [Angular 19+](https://angular.io/)
- Angular Material
- Angular Flex Layout
- [BrasilAPI](https://brasilapi.com.br/) (Estados e Municípios)
- ngx-mask
- TypeScript

## 📂 Estrutura do Projeto

```
src/app/
  cadastro/         # Componente de cadastro de clientes
  consulta/         # Componente de consulta de clientes
  brasilapi.service.ts  # Serviço para integração com BrasilAPI
  cliente.service.ts    # Serviço para persistência local
  ...
```

## 🎯 Objetivo Profissional

Este projeto foi criado para demonstrar domínio em Angular, boas práticas de desenvolvimento frontend, componentização, integração com APIs públicas.
