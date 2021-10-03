module.exports = {
  name: 'clickButton',
  // Scorp is gae

  run: async(button, client) => {

    if(button.id === 'click_to_function') {
      button.channel.send(`Thanks for inviting me!`)
    }

  }
}