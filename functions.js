module.exports = {
    getMember: function(interaction, toFind = '') {
        toFind = toFind.toLowerCase();

        let target = interaction.guild.members.cache.get(toFind);
        
        if (!target && interaction.mentions.members)
            target = interaction.mentions.members.first();

        if (!target && toFind) {
            target = interaction.guild.members.cache.find(member => {
                return member.displayName.toLowerCase().includes(toFind) ||
                member.user.tag.toLowerCase().includes(toFind)
            });
        }
            
        if (!target) 
            target = interaction.member;
            
        return target;
    },

    formatDate: function(date) {
        return new Intl.DateTimeFormat('en-US').format(date)
    }
};