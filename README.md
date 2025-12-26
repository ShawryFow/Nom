# VERSÃO DO BORUTO 1.5.0 ESPECIAL DE NATAL!

![Banner Boruto Bot](banner.png)

## Descrição

Esta é uma versão especial de natal do **Boruto Uzumaki Bot**, contendo diversos comandos úteis e integrados de forma inovadora. O bot utiliza uma estrutura de `switch/case` para o processamento de comandos, arquivos de configuração JSON para facilitar a personalização, e **suporte completo aos novos identificadores LID do WhatsApp**, além dos tradicionais JID.

## 🎮 Características Principais

- ✅ **+100 Comandos** incluindo brincadeiras e jogos
- ✅ **Sistema de Relacionamentos** (namorar, casar, trair, terminar)
- ✅ **Sistema de Ranking** para usuários mais ativos
- ✅ **Sistema de Boas-vindas** personalizável
- ✅ **Integração com IA** (WendelAI)
- ✅ **Suporte a JID e LID** do WhatsApp
- ✅ **Comandos de Administração** para grupos
- ✅ **Comandos de Diversão** e entretenimento

---

## 📋 Comandos Disponíveis

### Comando `ping`

**Descrição:** Verifica a latência do bot e confirma que ele está online.

**Uso:**
```
!ping
```

**Exemplo de Resposta:**
```
*[PING] Latência: 1.131s*

Viu só? Rápido como um raio! Esse é o poder da nova geração!
```

### Comandos de Relacionamento

- `!namorar @usuario` - Enviar pedido de namoro
- `!casar @usuario` - Casar com alguém
- `!casais` - Ver lista de casais do grupo
- `!trair @usuario` - Sistema de traição (brincadeira)
- `!terminar` - Terminar relacionamento

### Comandos de Administração

- `!ban @usuario` - Banir membro do grupo (admin)
- `!kick @usuario` - Remover membro do grupo (admin)
- `!add numero` - Adicionar membro ao grupo (admin)
- `!promover @usuario` - Promover a administrador (admin)
- `!rebaixar @usuario` - Remover administrador (admin)

### Comandos de Diversão

- `!menu` - Exibir menu completo de comandos
- `!ranking` - Ver ranking de usuários mais ativos
- E muito mais! (+100 comandos disponíveis)

---

## 📁 Estrutura do Projeto

```
Boruto-Uzumaki-Bot/
├── boruto.js                        # Arquivo principal do bot
├── package.json                     # Dependências e metadados
├── start.sh                         # Script para iniciar o bot
├── settings/                        # Diretório de configurações
│   ├── settings.json                # Configurações do bot
│   ├── lib/                         # Bibliotecas de comandos
│   │   ├── comando_namorar/         # Sistema de namoro
│   │   ├── comando_casar/           # Sistema de casamento
│   │   ├── comando_casais/          # Lista de casais
│   │   ├── comando_trair/           # Sistema de traição
│   │   ├── comando_terminar/        # Sistema de término
│   │   ├── ranking_system/          # Sistema de ranking
│   │   ├── sistema_bemvindo/        # Sistema de boas-vindas
│   │   ├── sistema_casais/          # Gerenciamento de casais
│   │   └── menus/                   # Menus do bot
├── database/                        # Banco de dados
│   └── ninja-qr/                    # Autenticação do WhatsApp
└── node_modules/                    # Dependências instaladas
```

---

## ⚙️ Arquivos de Configuração

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

---

## 📦 Requisitos

- **Node.js 20.x** (obrigatório)
- **npm** ou **yarn**

**Verificar versão do Node.js:**
```bash
node -v
```

Se você não tiver o Node.js 20, baixe em: https://nodejs.org/

---

## 🚀 Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Ninja28032024/Boruto-Uzumaki-Bot.git
   cd Boruto-Uzumaki-Bot
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o bot:**
   - Edite `settings/settings.json` para personalizar o prefixo, nome do bot e número do dono.

4. **Inicie o bot:**
   ```bash
   npm start
   ```

5. **Autenticação:**
   - Na primeira execução, o bot solicitará o número de telefone.
   - Digite o número no formato internacional (ex: `5528992777703`).
   - Um código de emparelhamento será exibido no terminal.
   - Abra o WhatsApp no celular, vá em **Dispositivos Conectados** > **Conectar um dispositivo** > **Conectar com número de telefone**.
   - Digite o código fornecido.

---

## 🎨 Personalização

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
  "ownerNumber": "SEU_NUMERO@s.whatsapp.net"
}
```

### Ativar WendelAI

Edite o arquivo `settings/settings.json` e modifique o campo `wendelAI`:

```json
{
  "wendelAI": {
    "ativo": true,
    "fotoUrl": "https://files.catbox.moe/0ssyj3.jpg"
  }
}
```

---

## 📚 Dependências

- **@whiskeysockets/baileys:** Biblioteca para conectar ao WhatsApp (versão customizada com suporte a LID)
- **chalk:** Coloração de logs no terminal
- **pino:** Sistema de logs
- **fluent-ffmpeg:** Processamento de mídia
- **sharp:** Processamento de imagens
- **qrcode:** Geração de QR codes

---

## 🔧 Suporte a JID e LID

O bot possui **suporte completo** aos dois tipos de identificadores do WhatsApp:

### JID (Antigo)
Formato tradicional: `5511999999999@s.whatsapp.net`

### LID (Novo)
Novo formato lançado pelo WhatsApp: `5511999999999:12@lid`

O bot detecta automaticamente qual tipo de identificador está sendo usado e trata ambos corretamente, garantindo compatibilidade total com contas antigas e novas.

---

## 💻 Tecnologias Utilizadas

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

## 📊 Logs e Monitoramento

O bot exibe logs coloridos no terminal para facilitar o monitoramento:

- **Azul (Cyan):** Informações de inicialização e configuração
- **Verde:** Conexão bem-sucedida e comandos executados
- **Amarelo:** Avisos (arquivos de configuração não encontrados)
- **Vermelho:** Erros críticos
- **Magenta:** Comandos recebidos

---

## 👨‍💻 Autor

**Ninja Devs 🥷**

Desenvolvedor: Mestre Ninja Tech</>

---

## 📄 Licença

ISC

---

## 🎄 Versão Especial de Natal

Esta é uma versão especial lançada em **25/12/2025** com mais de **100 comandos** incluindo diversos sistemas de interação, brincadeiras e funcionalidades inovadoras!

**Feliz Natal! 🎅🎁**
