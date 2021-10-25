const { Client, Message, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch').default

module.exports = {
    name: 'pokedex',
    description: 'Get information of a pokemon!',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const pokename = args.join(" ");
        if(!args.length) return message.reply('Heyy!! Please provide a pokemon name to searchhhhh');

        const res = await fetch(`https://some-random-api.ml/pokedex?pokemon=${pokename}`)
        .then(res => res.json())


        if(!res?.name) return message.reply('Couldn\'t find that pokemon.');
        else {

            const evo = res.family.evolutionLine.map((w, i) => {
                return [
                  `\`${i + 1}.\` ${w}\n`
                ]
            })

            message.reply({
                embeds: [new MessageEmbed()
                .setColor("RANDOM")
                .setTitle(`${res.name} | Generation: ${res.generation}`)
                .setAuthor('Type: ' + res.type?.join(", "))
                .setThumbnail(res.sprites.animated || res.sprites.normal || null)
                .setDescription('```' + res.description + '```')
                .addField(`Gender`, `${res.gender?.join(", ")}`)
                .addField('Species', `${res.species?.join(", ")}`)
                .addField('Abilities', `${res.abilities?.join(", ")}`)
                .addField('Egg Groups', `${res.egg_groups?.join(", ")}`)
                .addField('Evolution', `Evolution Stage: **${res.family.evolutionStage}**\n\n${evo}`)
                ]
            })

        }

    }
}