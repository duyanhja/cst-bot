
let helpMessage = (author) => {

  let help = "Hi " + author + "! ";
  help += "Looks like you're confused. Here's what I've learned: \n\n";
  help += "**todo**  |  Displays the todo list\n";
  help += "**add** *<month>* *<day>* *<time>* *<descr>*  |  add an event to the todo list (MM DD HH:mm Birthday)\n";
  help += "**del** *<index>* | deletes todo item based on its index on the list\n"
  help += "**prefix** *<prefix>*  |  change the bot's prefix (default: &)"

  return help;
}

module.exports = helpMessage;
