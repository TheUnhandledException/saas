# ❌ Sarcasmo-as-a-Service

<p align="center">
  <img src="https://raw.githubusercontent.com/TheUnhandledException/saas/main/assets/img/saas-with-meme.png" width="800" alt="SAAS Banner" width="70%"/>
</p>

Já precisou de uma maneira elegante para enaltecer a cognição negativa de alguém? Esta API retorna frases elegantemente sarcásticas, perfeitamente adequadas para qualquer cenário: pessoal, profissional, vida estudantil, vida de desenvolvedor ou simplesmente por diversão.

Criada para ser usada com jênios, esquerdistas e jumentos (apesar do pleonasmo com esquerdistas).

## 🚀 Uso da API

**URL Base**
```
https://saas.woorkier.com.br/saas
```

**Método:** `GET`  
**Limite:** `120 requisições por minuto por IP`

### 🔄 Exemplo de request
```http
GET /saas
```

### ✅ Exemplo de Resposta
```json
{
  "razão": "Você é o tipo de pessoa que consegue perder sozinho numa briga de espelhos."
}
```

Use-o em aplicativos, bots, landing pages, integrações do Slack ou onde quer que você precise.

---

## 🛠️ Self-Hosting com Docker

Quer fazer você mesmo? É leve e simples.

### 1. Clone o repositório
```bash
git clone https://github.com/TheUnhandledException/saas.git
cd saas
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Inicie o servidor
```bash
npm start
```

A API estará disponível em:
```
http://localhost:3000/saas
```

Você também pode trocar a porta ajustando a variável de ambiente:
```bash
PORT=5000 npm start
```

### 4. Usando Docker

Para rodar a aplicação em um container Docker com Traefik, siga os passos abaixo:

1. **Construa a imagem Docker**
   ```bash
   docker build -t saas-sarcasmo-as-a-service .
   ```

2. **Inicie o container usando Docker Compose**
   ```bash
   docker-compose up -d
   ```

A API estará disponível em:
```
https://saas.woorkier.com.br/saas
```

---

## 📁 Estrutura do Projeto

```
saas-project/
├── Dockerfile            # Instruções para construir a imagem Docker
├── docker-compose.yml    # Configuração dos serviços e Traefik
├── index.js              # Express API
├── reasons.json          # Centenas de sarcasmos elegantes
├── package.json          # Dependências e scripts
└── README.md             # Documentação do projeto
```

---

## ⚓ Devcontainer

Se você abrir este repositório no Github Codespaces, ele usará automaticamente `.devcontainer.json` para configurar seu ambiente. Se você abri-lo no VSCode, ele perguntará se você deseja reabri-lo em um contêiner.

---

> Quer usar o Sarcasmo as a Service no seu próprio projeto? Confira a seção de uso neste README e comece a retornar **"sarcasmos"** como um profissional.
---

## 👤 Autor

Criado pela ociosidade de [yuca](https://github.com/TheUnhandledException)

---

## 💪 Contribuição

Quer contribuir com mais frases? Melhoras as existentes? Só fazer um PR maroto.

---

## 📄 Licença

MIT — faça o que quiser, só não diga que fui eu que falei pra fazer.