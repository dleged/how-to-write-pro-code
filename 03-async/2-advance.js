const readline = require('readline');
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(readlineInterface, question) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(question, resolve);
  });
}

async function readlineInTerminal() {
  const name = await askQuestion(readlineInterface,'What is your name? ');
  const job = await askQuestion(readlineInterface, 'What is your job? ');
  const age = await askQuestion(readlineInterface, 'How old are you? ');
  console.log(
    'Hello ' + name + '. You are a ' + age + ' year old ' + job + '.'
  );
  readlineInterface.close();
}

readlineInTerminal();
