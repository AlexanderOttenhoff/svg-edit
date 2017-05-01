// TODO: Later
function toAbsolute(cur, prev) {
  let px = 0;
  let py = 0;
  px += 1;
  py += 1;
}

export default commands => commands.map((command, i) => (
  i === 0 || command.command === command.command.toUpperCase()
    ? command
    : ({ command: command.command.toUpperCase(), args: toAbsolute(command, commands[i - 1]) })
));
