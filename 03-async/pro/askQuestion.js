const readline = require('readline');

module.exports = function askQuestion(question) {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve, reject) => {
    readlineInterface.question(question, (answer) => {
      resolve(answer);
      readlineInterface.close();
    })
  });
};
