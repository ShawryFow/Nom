# VERSÃO DO BORUTO 1.5.0 ESPECIAL DE NATAL!

![Banner Boruto Bot](banner.png)

## Descrição

Esta é uma versão especial de natal do Boruto Uzumaki Bot, contendo Diversos comandos úteis e integrados de forma inavadora. O bot utiliza uma estrutura de `switch/case` para o processamento de comandos, arquivos de configuração JSON para facilitar a personalização, e **suporte completo aos novos identificadores LID do WhatsApp**, além dos tradicionais JID.

## Comandos Disponíveis

### 1. Comando `ping`

**Descrição:** Verifica a latência do bot e confirma que ele está online.

**Uso:**
```
!ping
```

**Aliases:** Nenhum

**Exemplo de Resposta:**
```
*[PING] Latência: 1.131s*

Viu só? Rápido como um raio! Esse é o poder da nova geração!
```

**Como funciona:** O comando calcula a diferença entre o momento em que a mensagem foi enviada pelo usuário e o momento em que o bot a processou, exibindo o resultado em segundos.

---

### 2. Comando `ban`

**Descrição:** Remove um membro do grupo (apenas para administradores).

**Uso:**
```
!ban @usuario
```

Ou responda a uma mensagem do usuário com:
```
!ban
```

**Aliases:** `banir`, `exilar`, `exílio`, `xô`

**Exemplo de Resposta:**
```
⚔️ SENTENÇA DE EXÍLIO ⚔️

Por decreto de um general, o guerreiro @5511999999999 foi exilado deste clã.
```

**Como funciona:**
- Verifica se o comando foi usado em um grupo.
- Verifica se o remetente é um administrador do grupo.
- Verifica se o bot é um administrador do grupo.
- Identifica o alvo (por menção, resposta ou argumento).
- Verifica se o alvo não é o dono do bot ou outro administrador.
- Remove o usuário do grupo.

**Proteções:**
- **Selo de Imunidade:** O dono do bot não pode ser banido.
- **Hierarquia:** Administradores não podem ser banidos.
- **Permissões:** O comando só funciona se o bot for administrador.

---

## Estrutura do Projeto

```
Izuko-Bot-Simplificado/
├── boruto.js                        # Arquivo principal do bot
├── package.json                     # Dependências e metadados
├── start.sh                         # Script para iniciar o bot
├── settings/                        # Diretório de configurações
│   ├── settings.json                # Configurações do bot (prefixo, dono, etc.)
│   └── token_api-shizuko.json       # Credenciais da API Shizuko
├── banco de dados/                  # Diretório para armazenar dados
│   └── ninja-qr/                    # Autenticação do WhatsApp
├── DOCUMENTACAO.md                  # Documentação técnica completa
└── README.md                        # Este arquivo
```

---

## Arquivos de Configuração

### `settings/settings.json`

Este arquivo contém as configurações principais do bot:

```json
{
  "prefix": "!",
  "botName": "Boruto Bot",
  "botNumber": "NUMERO_DO_BOT@s.whatsapp.net",
  "ownerNumber": "SEU_NUMERO@s.whatsapp.net",
  "ownerName": "Mestre Ninja Tech</>",
  "version": "1.5.0",
  "description": "Bot WhatsApp MultiFuncional com Diveros comandos e sistemas.",
  "wendelAI": {
    "ativo": false,
    "fotoUrl": "https://files.catbox.moe/0ssyj3.jpg"
  }
}
```

**Campos:**
- `prefix`: O prefixo usado para invocar comandos (ex: `!`, `.`, `/`)
- `botName`: Nome do bot exibido nas mensagens
- `botNumber`: Número do bot com identificador WhatsApp
- `ownerNumber`: Número do dono do bot com identificador WhatsApp
- `ownerName`: Nome do dono do bot
- `version`: Versão atual do bot
- `description`: Descrição breve do bot
- `wendelAI`: Configurações de integração com IA

### `settings/token_api-shizuko.json`

Este arquivo armazena as credenciais e configurações para integração com a API Shizuko:

```json
{
  "apiKey": "SUA_API_KEY_AQUI",
  "apiUrl": "https://api.shizuko.com",
  "endpoints": {
    "gpt": "/api/gpt",
    "image": "/api/image",
    "audio": "/api/audio",
    "video": "/api/video"
  },
  "timeout": 30000,
  "maxRetries": 3,
  "enabled": true
}
```

**Campos:**
- `apiKey`: Sua chave de API do Shizuko
- `apiUrl`: URL base da API
- `endpoints`: Endpoints disponíveis na API
- `timeout`: Tempo limite para requisições (em milissegundos)
- `maxRetries`: Número máximo de tentativas em caso de falha
- `enabled`: Define se a integração está ativa

**Nota:** Para usar a API Shizuko, substitua `SUA_API_KEY_AQUI` pela sua chave real e configure `enabled: true`.

---

## Requisitos

- **Node.js 20.x** (obrigatório)
- **npm** ou **yarn**

**Verificar versão do Node.js:**
```bash
node -v
```

Se você não tiver o Node.js 20, baixe em: https://nodejs.org/

---

## Instalação

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Configure o bot:**
   - Edite `settings/settings.json` para personalizar o prefixo, nome do bot e número do dono.
   - Se for usar a API Shizuko, edite `settings/token_api-shizuko.json` com suas credenciais.

3. **Inicie o bot:**
   ```bash
   npm start
   ```

4. **Autenticação:**
   - Na primeira execução, o bot solicitará o número de telefone.
   - Digite o número no formato internacional (ex: `5528992777703`).
   - Um código de emparelhamento será exibido no terminal.
   - Abra o WhatsApp no celular, vá em **Dispositivos Conectados** > **Conectar um dispositivo** > **Conectar com número de telefone**.
   - Digite o código fornecido.

---

## Personalização

### Alterar o Prefixo

Edite o arquivo `settings/settings.json` e modifique o campo `prefix`:

```json
{
  "prefix": "."
}
```

### Alterar o Número do Dono

Edite o arquivo `settings/settings.json` e modifique o campo `ownerNumber`:

```json
{
  "ownerNumber": "5511999999999"
}
```

**Importante:** Use apenas os dígitos do número (código do país + número), sem espaços ou caracteres especiais.

### Alterar o Número do Bot

Edite o arquivo `settings/settings.json` e modifique o campo `botNumber`:

```json
{
  "botNumber": "5528992777703"
}
```

**Nota:** Este número será usado como padrão durante a autenticação inicial do bot.

---

## Dependências

- **@whiskeysockets/baileys:** Biblioteca para conectar ao WhatsApp (versão customizada com suporte a LID).
- **chalk:** Coloração de logs no terminal.
- **pino:** Sistema de logs.

---

## Suporte a JID e LID

O bot possui **suporte completo** aos dois tipos de identificadores do WhatsApp:

### JID (Antigo)
Formato tradicional: `5511999999999@s.whatsapp.net`

### LID (Novo)
Novo formato lançado pelo WhatsApp: `5511999999999:12@lid`

O bot detecta automaticamente qual tipo de identificador está sendo usado e trata ambos corretamente, garantindo compatibilidade total com contas antigas e novas.

---

## Tecnologias Utilizadas

- **Node.js 20.x** (JavaScript) - **OBRIGATÓRIO**
- **Baileys** (API do WhatsApp - Fork customizado com suporte a LID)
- **JSON** (Banco de dados e configurações baseados em arquivos)

### ⚠️ Importante: Versão do Node.js

O bot foi desenvolvido especificamente para **Node.js versão 20** e **não funcionará** em outras versões. Se você tentar executar em uma versão diferente, receberá o seguinte erro:

```
╔═══════════════════════════════════════════════════════════╗
║  ❌ ERRO: Este bot requer Node.js versão 20.x           ║
╚═══════════════════════════════════════════════════════════╝
📌 Versão atual: v18.0.0
📥 Instale o Node.js 20: https://nodejs.org/
```

---

## Funções de Tratamento de Identificadores

O `boruto.js` implementa funções especializadas para lidar com ambos os formatos:

- `normalizeId(id)`: Normaliza qualquer identificador para o formato correto
- `getBotId(user)`: Extrai o ID do bot (suporta JID e LID)
- `isSameUser(id1, id2)`: Compara dois identificadores (independente do formato)
- `extractNumber(id)`: Extrai apenas o número de qualquer identificador

---

## Logs e Monitoramento

O bot exibe logs coloridos no terminal para facilitar o monitoramento:

- **Azul (Cyan):** Informações de inicialização e configuração
- **Verde:** Conexão bem-sucedida e comandos executados
- **Amarelo:** Avisos (arquivos de configuração não encontrados)
- **Vermelho:** Erros críticos
- **Magenta:** Comandos recebidos

---

## Autor

**Mestre Ninja Devs Of Bots**

---

## Licença

ISC
