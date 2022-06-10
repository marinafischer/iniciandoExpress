Utilize o arquivo `simpson.json` como base para fazer as requisições. 
Com exceção do requisito 3, **todos** os outros requisitos deverão ser feitos utilizando o módulo `fs`.

### 1 - Crie o endpoint GET `/simpsons`

#### Os seguintes pontos serão avaliados:

- O endpoint deve retornar um array com todas os simpsons. Devendo retornar o `status 200`, com o seguinte corpo:

```json
[
  {"id":"1","nome":"Homer Simpson"},
  {"id":"2","nome":"Marge Simpson"}
]
```

- Caso não exista nenhum simpson cadastrado o endpoint deve retornar um array vazio e o `status 200`.

### 2 - Crie o endpoint GET `/simpsons/:id`

- O endpoint deve retornar um personagem com base no id da rota. Devendo retornar o `status 200` ao fazer uma requisição `/simpsons/1`, com o seguinte corpo:

  ```json
  {"id":"1","nome":"Homer Simpson"}
  ```

- Caso não seja encontrada um personagem com base no id da rota, o endpoint deve retornar o `status 404` com o seguinte corpo:

  ```json
  {
    "message": "Personagem não encontrada"
  }
  ```

### 3 - Crie o endpoint POST `/login`

O endpoint deverá receber no corpo da requisição os campos `nome` e `senha` e retornar um token aleatório de 20 caracteres. Este token será utilizado pelas requisições dos próximos requisitos do projeto.

- O corpo da requisição deverá ter o seguinte formato:

```json
{
  "nome": "Ana da Silva",
  "senha": "minhasenha"
}
```

#### Os seguintes pontos serão avaliados:

- O endpoint deverá retornar um código de `status 200` com o token gerado e o seguinte corpo:

```json
{
  "token": "33sd7rth78hds531dtr2"
}
```

- O endpoint deve retornar um token aleatório a cada vez que for acessado.

### 4 - Adicione as validações para o endpoint `/login`

Os campos recebidos pela requisição devem ser validados e, caso os valores sejam inválidos, o endpoint deve retornar o código de `status 400` com a respectiva mensagem de erro ao invés do token.

As regras de validação são:
- o campo `nome` é obrigatório;
- o campo `nome` deve ter mais de 3 caracteres;
- o campo `senha` é obrigatório;
- o campo `senha` deve ter mais de 5 caracteres.
 
#### Os seguintes pontos serão avaliados:

- Caso o campo `nome` não seja passado ou esteja vazio, retorne um código de `status 400` com o seguinte corpo:

```json
{
  "message": "O campo \"nome\" é obrigatório"
}
```

- Caso o nome passado não seja válido, retorne um código de `status 400` com o seguinte corpo:

```json
{
  "message": "O \"nome\" deve ter pelo menos 3 caracteres"
}
```

- Caso o campo `senha` não seja passado ou esteja vazio retorne um código de `status 400` com o seguinte corpo:

```json
{
  "message": "O campo \"senha\" é obrigatório"
}
```

- Caso a senha não tenha pelo menos 5 caracteres retorne um código de `status 400` com o seguinte corpo:

```json
{
  "message": "O \"senha\" deve ter pelo menos 5 caracteres"
}
```

### 5 - Crie o endpoint POST `/simpsons`

#### Os seguintes pontos serão avaliados:

- O endpoint deve ser capaz de adicionar um novo personagem ao arquivo;

- O corpo da requisição deverá ter o seguinte formato:

  ```json
  {
    "nome": "Danielle Santos",
  }
  ```

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token inválido"
    }
    ```

- O campo `nome` deverá ter no mínimo 3 caracteres. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O campo \"nome\" é obrigatório"
    }
    ```

  - Caso o nome não tenha pelo menos 3 caracteres retorne um código de `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O \"nome\" deve ter pelo menos 3 caracteres"
    }
    ```

- Caso esteja tudo certo, retorne o `status 201`  e o personagem que foi cadastrado.
- O endpoint deve retornar o `status 201` o personagem que foi cadastrado, da seguinte forma
(o id deve ser gerado de forma automática e sequencial):

  ```json
  {
    "id": 10,
    "nome": "Milhouse",
  }
  ```

### 6 - Crie o endpoint PUT `/simpsons/:id`

#### Os seguintes pontos serão avaliados:

- O endpoint deve ser capaz de editar um personagem com base no id da rota, sem alterar o id registrado.

- O corpo da requisição deverá ter o seguinte formato:

  ```json
  {
    "nome": "Lisa",
  }
  ```
  
- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token inválido"
    }
    ```

- O campo `nome` deverá ter no mínimo 3 caracteres. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O campo \"nome\" é obrigatório"
    }
    ```

  - Caso o nome não tenha pelo menos 3 caracteres retorne um código de `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O \"nome\" ter pelo menos 3 caracteres"
    }
    ```

- Caso esteja tudo certo, retorne o `status 200` e o personagem editado.
- O endpoint deve retornar o `status 200` e o personagem que foi editado, da seguinte forma:

  ```json
  {
    "id": 1,
    "nome": "Lisa",
  }
  ```
### 7 - Crie o endpoint DELETE `/simpsons/:id`

#### Os seguintes pontos serão avaliados:

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token inválido"
    }
    ```

- O endpoint deve deletar um personagem com base no id da rota. Devendo retornar o `status 204`, sem conteúdo na resposta.

### 8 - Crie o endpoint GET `/simpsons/search?s=searchTerm`

#### Os seguintes pontos serão avaliados:

- O endpoint deve retornar um array de personagens que contenham em seu nome o termo pesquisado no queryParam da URL. Devendo retornar o `status 200`, com o seguinte corpo:

  ```
  /search?s=ho
  ```

  ```json
  [
    {
      "id": 1,
      "nome": "Homes",
    },
    {
      "id": 5,
      "nome": "Milhouse",
    } 
  ]
  ```

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token inválido"
    }
    ```

- Caso `searchTerm` não seja informado ou esteja vazio, o endpoint deverá retornar um array com todos personagens cadastradas, assim como no endpoint GET `/simplsons`, com um `status 200`.

- Caso nenhuma personagem satisfaça a busca, o endpoint deve retornar o `status 200` e um array vazio.

**Dica** é importante ter atenção se essa rota não entra em conflito com as outras, já que a ordem das rotas faz diferença na interpretação da aplicação
