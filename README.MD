Segue um **README.md** pronto para o seu projeto Fastify com TypeScript, baseado no código que você me enviou:

---

````markdown
# 🏎️ API de Equipes e Pilotos de Fórmula 1 (2025)

Uma **Minimal API** desenvolvida com **Fastify** e **TypeScript**, que fornece dados de equipes e pilotos da temporada 2025 da Fórmula 1.

## 🚀 Tecnologias Utilizadas

- [Fastify](https://fastify.dev/) - Framework web rápido e eficiente para Node.js
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript com tipagem estática
- [@fastify/cors](https://github.com/fastify/fastify-cors) - Plugin de CORS para Fastify

## 📦 Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
````

2. Acesse a pasta do projeto:

   ```bash
   cd nome-do-repositorio
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor:

   ```bash
   npm run dev
   ```

O servidor será iniciado na porta **3333** por padrão.

## 📚 Endpoints Disponíveis

### 🔹 Listar todas as equipes

```
GET /teams
```

**Resposta de exemplo:**

```json
{
  "teams": [
    { "id": 1, "name": "McLaren", "base": "Woking, Reino Unido" },
    { "id": 2, "name": "Ferrari", "base": "Maranello, Itália" }
  ]
}
```

---

### 🔹 Listar todos os pilotos

```
GET /drivers
```

**Resposta de exemplo:**

```json
{
  "drivers": [
    { "id": 1, "name": "Lando Norris", "team": "McLaren" },
    { "id": 2, "name": "Oscar Piastri", "team": "McLaren" }
  ]
}
```

---

### 🔹 Buscar piloto por ID

```
GET /drivers/:id
```

**Parâmetros:**

* `id` *(number)* — ID do piloto

**Exemplo:**

```
GET /drivers/3
```

**Resposta de exemplo:**

```json
{
  "driver": { "id": 3, "name": "Charles Leclerc", "team": "Ferrari" }
}
```

**Caso o piloto não seja encontrado:**

```json
{
  "message": "Driver not found"
}
```

## ⚙️ Configuração de Porta

Por padrão, a API utiliza a porta **3333**.
Você pode alterar definindo a variável de ambiente `PORT`:

```bash
PORT=4000 npm run dev
```

