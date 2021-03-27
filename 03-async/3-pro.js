const askQuestion = require('./pro/askQuestion');

async function readlineInTerminal() {
  const name = await askQuestion('What is your name? ');
  const job = await askQuestion('What is your job? ');
  const age = await askQuestion('How old are you? ');
  console.log(
    'Hello ' + name + '. You are a ' + age + ' year old ' + job + '.'
  );
}

readlineInTerminal();