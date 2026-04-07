# 📺 API de Séries

API REST desenvolvida em **Node.js com Express** para gerenciamento de séries de TV.  
Permite realizar operações CRUD completas com validação de dados e tratamento de erros.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **Armazenamento em memória** (array)

---

## 📁 Estrutura do Projeto

```
api-series/
├── controllers/
│   └── seriesController.js   # Lógica das operações CRUD
├── routes/
│   └── seriesRoutes.js       # Definição das rotas
├── assets/                   # Prints dos testes no Postman
├── server.js                 # Arquivo principal do servidor
├── package.json
└── README.md
```

---

## ▶️ Como Executar

```bash
# 1. Clone o repositório
git clone https://github.com/sarahmacacos/api-series.git
cd api-series

# 2. Instale as dependências
npm install

# 3. Inicie o servidor
node server.js
```

Servidor rodando em: `http://localhost:3000`

---

## 📋 Endpoints

### Base URL
```
http://localhost:3000/api/series
```

---

### ✅ GET /api/series — Listar todas as séries

**Requisição:**
```
GET http://localhost:3000/api/series
```

**Resposta (200 OK):**
```json
[
  { "id": 1, "titulo": "Stranger Things", "genero": "Ficção Científica", "ano": 2016 },
  { "id": 2, "titulo": "Breaking Bad", "genero": "Drama", "ano": 2008 }
]
```

![GET todas as séries](assets/get-all.png)

---

### ✅ GET /api/series/:id — Buscar série por ID

**Requisição:**
```
GET http://localhost:3000/api/series/1
```

**Resposta (200 OK):**
```json
{
  "id": 1,
  "titulo": "Stranger Things",
  "genero": "Ficção Científica",
  "ano": 2016
}
```

![GET série por ID](assets/get-id.png)

---

### ✅ POST /api/series — Criar nova série

**Requisição:**
```
POST http://localhost:3000/api/series
Content-Type: application/json
```

**Body:**
```json
{
  "titulo": "La Casa de Papel",
  "genero": "Crime",
  "ano": 2017
}
```

**Resposta (201 Created):**
```json
{
  "id": 11,
  "titulo": "La Casa de Papel",
  "genero": "Crime",
  "ano": 2017
}
```

![POST criar série](assets/post-criar.png)

**Validações — Resposta (400 Bad Request):**
```json
{ "erro": "O campo titulo e obrigatorio." }
{ "erro": "O campo genero e obrigatorio." }
{ "erro": "O campo ano e obrigatorio." }
```

---

### ✅ PUT /api/series/:id — Atualizar série

**Requisição:**
```
PUT http://localhost:3000/api/series/5
Content-Type: application/json
```

**Body:**
```json
{
  "titulo": "Dark",
  "genero": "Mistério",
  "ano": 2017
}
```

**Resposta (200 OK):**
```json
{
  "id": 5,
  "titulo": "Dark",
  "genero": "Mistério",
  "ano": 2017
}
```

![PUT atualizar série](assets/put.png)

**Resposta (404 Not Found):**
```json
{ "erro": "Serie nao encontrada." }
```

---

### ✅ DELETE /api/series/:id — Deletar série

**Requisição:**
```
DELETE http://localhost:3000/api/series/10
```

**Resposta (204 No Content):**  
Sem body na resposta — comportamento correto para DELETE.

![DELETE 204](assets/delete-204.png)

**Resposta (404 Not Found):**
```json
{ "erro": "Serie nao encontrada." }
```

![DELETE 404](assets/delete-404.png)

---

## 🔒 Validações Implementadas

| Campo    | Regra                             |
|----------|-----------------------------------|
| `titulo` | Obrigatório no POST               |
| `genero` | Obrigatório no POST               |
| `ano`    | Obrigatório no POST               |
| `id`     | Deve existir no GET, PUT e DELETE |

---

## 📊 Status Codes Utilizados

| Código | Significado  | Quando é usado               |
|--------|--------------|------------------------------|
| 200    | OK           | GET e PUT bem-sucedidos      |
| 201    | Created      | POST bem-sucedido            |
| 204    | No Content   | DELETE bem-sucedido          |
| 400    | Bad Request  | Campos obrigatórios ausentes |
| 404    | Not Found    | Série não encontrada pelo ID |

---

## 🎬 Dados Iniciais (10 séries)

| ID | Título           | Gênero            | Ano  |
|----|------------------|-------------------|------|
| 1  | Stranger Things  | Ficção Científica | 2016 |
| 2  | Breaking Bad     | Drama             | 2008 |
| 3  | Game of Thrones  | Fantasia          | 2011 |
| 4  | The Walking Dead | Terror            | 2010 |
| 5  | Dark             | Ficção Científica | 2017 |
| 6  | Friends          | Comédia           | 1994 |
| 7  | The Office       | Comédia           | 2005 |
| 8  | Black Mirror     | Ficção Científica | 2011 |
| 9  | Euphoria         | Drama             | 2019 |
| 10 | The Witcher      | Fantasia          | 2019 |

---

## 🧪 Collection do Postman

Importe o arquivo `collection.postman_collection.json` no Postman para testar todos os endpoints.

**Testes incluídos:**
- GET todas as séries
- GET série por ID (existente)
- GET série por ID (não encontrada — 404)
- POST criar série (sucesso)
- POST sem título (erro 400)
- POST sem gênero (erro 400)
- POST sem ano (erro 400)
- PUT atualizar série (sucesso)
- PUT série inexistente (404)
- DELETE série (sucesso — 204)
- DELETE série inexistente (404)
