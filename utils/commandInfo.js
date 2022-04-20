module.exports = (command) => {
    return command?.data ? {
        title: `${command.data.name[0].toUpperCase() + command.data.name.slice(1)}`,
        description: `\`${command.data.description || "No Description"}\`\n\n${command.data.options?.length > 0 ? "Options:" : ""}`,
        fields: command.data.options?.map(v => {
            return {
                name: v.name,
                value: `\`${v.description}\``
            }
        }),
        color: "BLUE"
    } : {
        title: "❌ Invalid command was provided",
        color: "RED"
    }
}