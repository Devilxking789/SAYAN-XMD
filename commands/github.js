async function githubCommand(sock, chatId) {
    const repoInfo = `*🤖 SAYAN MD*

*📂 GitHub Repository:*
https://github.com/mruniquehacker/SAYAN-MD

*📢 Official Channel:*
https://youtube.com/devil-store-all

_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '0029Vb2zlJP1CYoLCdr1k13f@newsletter',
                    newsletterName: 'SAYAN MD',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 