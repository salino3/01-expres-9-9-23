import inquirer from 'inquirer';

let exit = false;
while (!exit) {
  const answer = await inquirer.prompt({
    name: "consoleRunner",
    type: "list",
    message: "Which console-runner do you want to run?",
    choices: ["create-admin", "create-user", "exit"],
  });

  if (answer.consoleRunner !== "exit") {
    if (answer.consoleRunner === "create-admin"){
      const { run } = await import(`./${answer.consoleRunner}.runner.js`);
    await run();
    }else{
      console.log("Hola")
    }

  } else {
    exit = true;
  };
};

