import chalk from "chalk";
import validator from "validator";
// console.log(chalk.blue.inverse("Hi Towhid"));
const res = validator.isEmail("towhidewucse@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
