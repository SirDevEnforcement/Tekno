const { MessageActionRow, MessageButton } = require("discord.js");
const guildConfig = require("../../Schemas/GuildDB")
const suggestions = require("../../Schemas/SuggestDB")

module.exports = {
        name: "suggest",
        description: "Create or reply to suggestions",
        options: [{
            name: "create",
            type: 1,
            description: "Create a suggestion",
            options: [{
                name: "suggestion",
                type: 3,
                required: true,
                description: "The suggesiton you want to give"
            }]
        }, {
            name: "reply",
            type: 1,
            description: "Reply to a suggesiton",
            options: [{
                name: "id",
                type: 3,
                required: true,
                description: "The suggestion to which you want to reply"
            }, {
                name: "status",
                type: 3,
                required: true,
                description: "Set the status of this suggestion",
                choices: [{
                    name: "Accepted",
                    value: "1"
                }, {
                    name: "Rejected",
                    value: "2"
                }]
            }, {
                name: "response",
                type: 3,
                required: true,
                description: "The response to this status"
            }]
        }, {
            name: 'set-channel',
            type: 1,
            description: "Select the suggestion channel",
            options: [{
                name: "channel",
                type: 7,
                required: true,
                description: "The channel where I should send the suggestions"
            }]
        }],
    timeout: 1000,

    run: async (client, interaction) => {
        await interaction.deferReply();

        const option = interaction.options.getSubcommand(),
            suggestion = interaction.options.getString("suggestion"),
            channel = interaction.options.getChannel("channel"),
            id = interaction.options.getString("id"),
            status = interaction.options.getString("status"),
            response = interaction.options.getString("response"),
            data = await guildConfig.findOne({ id: interaction.guild.id }) || await guildConfig.create({ id: interaction.guild.id }),
            sug = await suggestions.findOne({ message: id }),
            c = interaction.guild.channels.cache.get(data.suggestion);

        if (option === "create") {
            if (!c) return interaction.editReply({
                embeds: [{
                    title: "❌ Suggestion channel has not been set!"
                }]
            });

            const row = new MessageActionRow().addComponents([
                new MessageButton({
                    customId: "1",
                    label: "⬆ Upvote",
                    style: "SECONDARY"
                }), new MessageButton({
                    customId: "2",
                    label: "⬇ Downvote",
                    style: "SECONDARY"
                })
            ])

            const msg = await c.send({
                components: [row],
                embeds: [{
                    title: "New Suggestion!",
                    color: "BLUE",
                    description: suggestion,
                    fields: [{
                        name: "Upvotes",
                        value: "0",
                        inline: true
                    }, {
                        name: "Downvotes",
                        value: "0",
                        inline: true
                    }, {
                        name: "Status",
                        value: "Pending",
                        inline: true
                    }],
                    footer: {
                        text: interaction.user.username,
                        iconURL: interaction.user.displayAvatarURL()
                    }
                }]
            });

            await suggestions.create({
                suggestion,
                user: interaction.user.id,
                message: msg.id,
                channel: c.id,
                guild: interaction.guildId,
                votes: {
                    up: [], down: []
                },
                createdAt: Date.now(),
            });

            msg.embeds[0].fields.push({
                name: "Suggestion ID",
                value: `\`\`\`\n${msg.id}\n\`\`\``,
                inline: true
            });

            msg.edit({
                embeds: msg.embeds
            });

            interaction.editReply({
                embeds: [{
                    color: "GREEN",
                    title: "✅ Created the suggestion!"
                }]
            })
        } else if (option === "reply") {
            if (!interaction.member.permissions.has("MANAGE_GUILD")) return interaction.editReply({
                embeds: [{
                    title: "❌ You need the `MANAGE_GUILD` permission to run this command!"
                }]
            });

            if (!sug) return interaction.editReply({
                embeds: [{
                    title: "❌ Invalid Suggestion ID"
                }]
            });

            const msg = await interaction.guild.channels.cache.get(sug.channel)?.messages?.fetch(sug.message);

            if (!msg) return interaction.editReply({
                embeds: [{
                    title: "❌ The message has been delted",
                    description: "This suggestion can no longer be replied to"
                }]
            });

            const row = new MessageActionRow().addComponents([
                new MessageButton({
                    customId: "1",
                    label: "⬆ Upvote",
                    style: "SECONDARY",
                    disabled: true
                }), new MessageButton({
                    customId: "2",
                    label: "⬇ Downvote",
                    style: "SECONDARY",
                    disabled: true
                })
            ]);

            msg.embeds[0].fields[2].value = status === "1" ? "✅ Accepted" : "❌ Denied";
            msg.embeds[0].fields.push({
                name: "Response",
                value: response,
            })

            msg.edit({
                embeds: msg.embeds,
                components: [row]
            });

            interaction.editReply({
                embeds: [{
                    color: "GREEN",
                    title: "✅ Suggestion replied to"
                }]
            })
        } else if (option === "set-channel") {
            if (!interaction.member.permissions.has("MANAGE_GUILD")) return interaction.editReply({
                embeds: [{
                    title: "❌ You need the `MANAGE_GUILD` permission to run this command!"
                }]
            });

            if (channel.type !== "GUILD_TEXT") return interaction.editReply({
                embeds: [{
                    title: "❌ Invalid channel!"
                }]
            });

            await guildConfig.findOneAndUpdate({ id: interaction.guildId }, { suggestion: channel.id });

            interaction.editReply({
                embeds: [{
                    color: "GREEN",
                    title: "✅ Setup the suggestion!"
                }]
            })
        }
    }
}