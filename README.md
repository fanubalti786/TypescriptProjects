# TypescriptProjects

(Simple_calculator project setup)

install Node.js
npm install -g typescript
install vs code
node -v 
npm -v 
npx -v 


(we execute game demo package with command line which is npx firequiz
just for how we can execute package with npx)

(we use npm init command for json.js file and then they ask multiple queston about project basically this file is a characteristics of our project)

(code . command is used to open current directory in vs code)

(tsc --init command is used for tsconfig.js its a runtime compiler to execute typescript code with some rules after that we wil modify in line 
number 14 with es2022, line number 28 we change wiht NodeNext and line number 30 also with uncomment)


(after that we modify json.js file also according to tsconfig.js which is "type": "module" in json.js)


(after that we install package which command is npm i inquirer through inquirer websites bc it is used to input through 
command line and our code depend on that if we want to execute input function on cli)

(after that we can see in json.file which is automatically update after npm i inquirer command wich is dependencies)

(after that we open index.ts and import input package through this code " import inquirer from "inquirer" "; after that it gives error when we
hover on this error then that give to us one command suggestion which is " i --save-dev @types/inquirer " it is used to run this package its work like
hammer when we hand the pic on wall )

(after that we can see update json.js file with extra devdependencies code)

(dependencies is used after the project complete and devdependencies is used during programe execution time)
