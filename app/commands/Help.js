
function helpMessage(author) {

  let help = "Hi " + author + "! ";
  help += "Looks like you're confused. Here's what I've learned: \n\n";
  help += "**todo**  |  Displays the todo list\n";
  help += "**add** *<month>* *<day>* *<time>* *<descr>*  |  add an event to the todo list (ie March 12 13 my birthday)\n";
  help += "**prefix** *<prefix>*  |  change the bot's prefix (default: &)"

  return help;
}

module.exports = helpMessage;
