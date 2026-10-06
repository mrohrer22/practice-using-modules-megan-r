import yargs from "yargs";
import { hideBin } from 'yargs/helpers';
import chalk from "chalk";

const weatherDatabase = {
    'St.Louis': {temp:'74', conditions:`cloudy`, humidity:`35%`, chanceOfRain:`0%`, windSpeed:`3mph`},
    'Kansas City': {temp: '72', conditions:`sunny`, humidity: `50%`, chanceOfRain:'25%', windSpeed:`3mph`},
    'Chicago': {temp: '72', conditions:`rainy`, humidity: `85%`, chanceOfRain:`100%`, windSpeed:`9mph`}
};

const argv = yargs(hideBin(process.argv)).parse()

console.log(chalk.bgCyanBright("CURRENT WEATHER DATA"));
console.log(`${chalk.bold('Temp:')}  ${chalk.bgGreen(weatherDatabase[argv.city].temp)}`);
console.log(`${chalk.bold('Conditions:')}  ${chalk.bgGray(weatherDatabase[argv.city].conditions)}`);
console.log(`${chalk.bold('Chance of Rain:')}  ${chalk.bgBlueBright(weatherDatabase[argv.city].chanceOfRain)}`);

/*
    ○ The purpose of package.json in managing dependencies.
        Think of package.json as the master blueprint for the project. Instead of tracking every single file inside external packages, this file just lists 
        their names and compatible versions. It lets Node know exactly what packages our app needs to run properly.
    ○ Why node_modules should not be included in version control.
        Since package.json already has the list of packages, anyone can generate their own local node_modules folder in seconds.
    ○ How npm install reinstalls dependencies and its importance in collaborative projects.
        When someone else pulls or clones this repository, they won't get the node_modules folder (thanks to .gitignore). Running `npm install` tells npm 
        to look at package.json, download the required packages, and rebuild the node_modules folder locally. It keeps the repo super lightweight while 
        making sure everyone on the team is running the exact same dependencies.
*/