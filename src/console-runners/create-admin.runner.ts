import inquirer, {QuestionCollection} from "inquirer";

const passwordQuestions: QuestionCollection = [
  {
    name: "password",
    type: "password",
    message: "Password",
    mask: true,
  },
  {
    name: "confirmPassword",
    type: "password",
    message: "Confirm password",
    mask: true,
  },
];

export const run = async () => {
  console.log("Running create admin");
 const {user} = await inquirer.prompt({
    name: "user",
    type: 'input',
    message: 'User name: '
  });

  let passwordAnsers = await inquirer.prompt(passwordQuestions);
    while(passwordAnsers.password !== passwordAnsers.confirmPassword){
        console.error('Password does not match, fill it again');
        passwordAnsers = await inquirer.prompt(passwordQuestions);
    };
   // TODO: Insert into DB and disconnect it
   console.log(`User ${user} created!`);
};
