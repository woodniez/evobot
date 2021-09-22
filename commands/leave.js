module.exports = {
    name: 'leave',
    decsription: 'leave channel',
    async execute(message, args){
        const VoiceChannel = message.member.voice.channel;
        if(!VoiceChannel) return message.channel.send('Get In the Voice Channel');
        await VoiceChannel.leave();
        await message.channel.send('Ciao :raised_hand:');
    }
}