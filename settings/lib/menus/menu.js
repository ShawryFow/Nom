// =================================================================
// == MENU PRINCIPAL DO BORUTO BOT - 5 CATEGORIAS
// =================================================================

const menuPrincipal = (prefix, botName, sender, ownerNumber) => {
  
// NÃO APAGUE ESSE ${prefix}, ${botName}, ${sender} nem ${ownerNumber} - ISSO SÃO DEFINIÇÕES QUE ESTÃO PUXANDO DO settings.json
  
return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ *BORUTO BOT*
▢ ⌁ User: *${sender.split("@")[0]}*
▢ ⌁ Status: *Online*
▢ ⌁ Bot: *${botName}*
▢ ⌁ Dono: *${ownerNumber}*
▢ ⌁ Prefixo: *${prefix}*
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ *🎮 BRINCADEIRAS*
▢ ⌁ ${prefix}atrapalhado @marcar
▢ ⌁ ${prefix}bebado @marcar
▢ ⌁ ${prefix}corcundo @marcar
▢ ⌁ ${prefix}corno @marcar
▢ ⌁ ${prefix}dancarino @marcar
▢ ⌁ ${prefix}feio @marcar
▢ ⌁ ${prefix}gay @marcar
▢ ⌁ ${prefix}gostoso @marcar
▢ ⌁ ${prefix}nerd @marcar
▢ ⌁ ${prefix}lindo @marcar
▢ ⌁ ${prefix}rico @marcar
▢ ⌁ ${prefix}sono @marcar
▢ ⌁ ${prefix}sortudo @marcar
▢ ⌁ ${prefix}trovao @marcar
▢ ⌁ ${prefix}vesgo @marcar
▢ ⌁ ${prefix}wifi @marcar
▢ ⌁ ${prefix}beijar @marcar
▢ ⌁ ${prefix}cara-coroa <cara/coroa>
▢ ⌁ ${prefix}rankgay
▢ ⌁ ${prefix}upload-catbox <marcar img>
▢ ⌁ ${prefix}somar
▢ ⌁ ${prefix}velha @marcar
▢ ⌁ ${prefix}velha-rank
▢ ⌁ ${prefix}velha-stats
▢ ⌁ ${prefix}guia-rank
▢ ⌁ ${prefix}cancelar-velha
▢ ⌁ ${prefix}level
▢ ⌁ ${prefix}rank
▢ ⌁ ${prefix}converter-xp
▢ ⌁ ${prefix}patentes
▢ ⌁ ${prefix}namorar @marcar
▢ ⌁ ${prefix}casais
▢ ⌁ ${prefix}casar @marcar
▢ ⌁ ${prefix}terminar-namoro
▢ ⌁ ${prefix}terminar-casamento
▢ ⌁ ${prefix}trair-com @marcar
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ *🛡️ ADMINISTRADOR*
▢ ⌁ ${prefix}ban @marcar
▢ ⌁ ${prefix}promover @marcar
▢ ⌁ ${prefix}rebaixar @marcar
▢ ⌁ ${prefix}delete (responder msg)
▢ ⌁ ${prefix}marcar <mensagem>
▢ ⌁ ${prefix}alerta <mensagem>
▢ ⌁ ${prefix}abrir-fechar-gp 06:00 22:00
▢ ⌁ ${prefix}statushorario
▢ ⌁ ${prefix}cancelar-abrir-gp
▢ ⌁ ${prefix}lista-negra 5599...
▢ ⌁ ${prefix}del-listanegra 5599...
▢ ⌁ ${prefix}modo-parceria (ativa/desativa)
▢ ⌁ ${prefix}add-parceria 5511999999999 20
▢ ⌁ ${prefix}del-parceria 5511999999999
▢ ⌁ ${prefix}parceria-list
▢ ⌁ ${prefix}guia-parcerias
▢ ⌁ ${prefix}link-gp
▢ ⌁ ${prefix}redefinir-link
▢ ⌁ ${prefix}nomegp <nome novo>
▢ ⌁ ${prefix}salvar-nomegp
▢ ⌁ ${prefix}restaurar-nomegp
▢ ⌁ ${prefix}msg-tmp <24/7/90/0>
▢ ⌁ ${prefix}antilink (nível 1)
▢ ⌁ ${prefix}antilink2 (nível 2)
▢ ⌁ ${prefix}antilink3 (nível 3)
▢ ⌁ ${prefix}antilink4 (nível 4)
▢ ⌁ ${prefix}antilink5 (nível 5)
▢ ⌁ ${prefix}manual-antilink
▢ ⌁ ${prefix}antiimg (anti-img)
▢ ⌁ ${prefix}antiimg2 (anti-img)
▢ ⌁ ${prefix}antiimg3 (anti-img)
▢ ⌁ ${prefix}antivideo (anti-vídeo)
▢ ⌁ ${prefix}antivideo2 (anti-vídeo)
▢ ⌁ ${prefix}antivideo3 (anti-vídeo)
▢ ⌁ ${prefix}antiaudio (anti-audio)
▢ ⌁ ${prefix}antiaudio2 (anti-audio)
▢ ⌁ ${prefix}antiaudio3 (anti-audio)
▢ ⌁ ${prefix}antidoc (anti-doc)
▢ ⌁ ${prefix}antidoc2 (anti-doc)
▢ ⌁ ${prefix}antidoc3 (anti-doc)
▢ ⌁ ${prefix}antifig (anti-fig)
▢ ⌁ ${prefix}antifig2 (anti-fig)
▢ ⌁ ${prefix}antifig3 (anti-fig)
▢ ⌁ ${prefix}antimsg (só áudios)
▢ ⌁ ${prefix}bangp (bloquear)
▢ ⌁ ${prefix}bemvindo on/off
▢ ⌁ ${prefix}legendabv (mensagem)
▢ ⌁ ${prefix}infobv (manual)
▢ ⌁ ${prefix}gp-f (abrir)
▢ ⌁ ${prefix}gp-a (fechar)
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ *👑 MENU DONO*
▢ ⌁ ${prefix}enviar-msg (sistema interativo)
▢ ⌁ ${prefix}aceitar (solicitações)
▢ ⌁ ${prefix}rejeitar (solicitações)
▢ ⌁ ${prefix}seradm (auto-promover)
▢ ⌁ ${prefix}totalcmds (total de comandos)
▢ ⌁ ${prefix}cancelar-autosair
▢ ⌁ ${prefix}status-autosair
▢ ⌁ ${prefix}auto-sair 5s/m | 24/12 12:00
▢ ⌁ ${prefix}setprefix (novo prefixo)
▢ ⌁ ${prefix}wendel-pv (IA privado)
▢ ⌁ ${prefix}antipv (bloquear)
▢ ⌁ ${prefix}antipv2 (avisar)
▢ ⌁ ${prefix}antipv3 (ignorar)
▢ ⌁ ${prefix}enviar-planos-sync 5598999...
▢ ⌁ ${prefix}enviar-site-sync 5598999...
▢ ⌁ ${prefix}enviar-plano10 5598999...
▢ ⌁ ${prefix}enviar-plano20 5598999...
▢ ⌁ ${prefix}enviar-plano30 5598999...
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ *🎵 DOWNLOAD*
▢ ⌁ ${prefix}play (nome)
▢ ⌁ ${prefix}tocar (nome)
▢ ⌁ ${prefix}play2 (Nome ou URL)
▢ ⌁ ${prefix}play3 (nome)
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

╭━⇋⚡⇌━━━⇋⚡⇌━╮
▢ ╭═══⊷ *👥 MEMBROS*
▢ ⌁ ${prefix}somar
▢ ⌁ ${prefix}toimg (marca fig)
▢ ⌁ ${prefix}togif (marca fig)
▢ ⌁ ${prefix}rename pacote | autor
▢ ⌁ ${prefix}rvisu (revela visu)
▢ ⌁ ${prefix}iaedit <prompt>
▢ ⌁ ${prefix}ping (speed)
▢ ⌁ ${prefix}totalcmds
▢ ⌁ ${prefix}s (sticker)
▢ ⌁ ${prefix}f (sticker)
▢ ⌁ ${prefix}s2 (sticker)
▢ ⌁ ${prefix}f2 (sticker)
▢ ⌁ ${prefix}gpt (pergunta)
▢ ⌁ ${prefix}doar-xp @marcar <N>
▢ ╰═══⊷
╰━⇋⚡⇌━━━⇋⚡⇌━╯

⚡ *Esse é o poder da nova geração!* 🔥
`;
};

module.exports = { menuPrincipal };
