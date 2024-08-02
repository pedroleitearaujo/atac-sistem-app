# Introdução

Front-End para a API e banco de dados para a aplicação Acat Delivery. O algoritmo é um simples sistema para cadastrar cliente com seu respectivo nome, e-mail, telefone, e coordenadas (X, Y), também utiliza do algortimo do Caxeiro viajante para calcular o melhor trajeto em um plano cartesiano.

## Requisitos
- NodeJS

# Instalação

### 1 - NodeJS
- Faça download da versão LTS do [NodeJS](https://nodejs.org/en/) e instale-o.

### 2 - Projeto
- Dê um GIT CLONE nesse projeto.
- Abra seu terminal na pasta do projeto e instale as dependências necessárias com o comando abaixo:

```javascript
yarn
// ou
npm install
```

### 3 - Configuração de apontamento da API para consulta
No arquivo `./src/services/api.tsx` contém a url de apontamento da API, caso for preciso faça a alteração para o Host correto.

# Uso

### 1 - Aplicação
- Inicie a Aplicação com o comando abaixo:

```javascript
yarn dev
// ou
npm run dev
```

Após rodar o comando acima, sua Aplicação estará disponível na porta 3000