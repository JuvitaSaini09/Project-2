var readlineSync = require('readline-sync');

const chalk = require('chalk');
console.log(" \n")

console.log(chalk.white(chalk.bgBlue("\n Welcome to Juvita's Quiz on Bollywood \n")));

console.log("Rules : \n 1) You will be awarded score 1\n for every right answer \n 2) If you score more than 5 \n then you will reach level 2\n 3) Level 1 contain ten questions  \n 4) Level 2 contain 4 questions ")




console.log("\n ")
console.log(("            ") + chalk.hex("#2d0745")(chalk.bgWhite("Level 1\n")));

var score = 0;
var QuesOne = {
  ques: "1) Which movie is this popular line from-->Dosti ka ek usool hai madam - no sorry, no thank you",
  A: "A) Kuch Kuch Hota hai.",
  B: "B) Dilwale Dulhania Le Jayenge",
  C: "C) Maine Pyar Kiya ",
  D: " D) Andaz Apna Apna",
  ans: 'C'
}


var QuesTwo = {
  ques: "2) Finish the quote from Om Shanti Om:Ek chutki sindoor ki keemat, tum kya jaano _____?",
  A: "A) Om Babu",
  B: "B) Mahesh Babu",
  C: "C) Ramesh Babu",
  D: "D) Naalayak",
  ans: 'C'
}

var QuesThree = {
  ques: "3) What is the name of Sholay' s iconic villain?",
  A: "A) Gabbar Singh",
  B: "B) Shakaal",
  C: "C) kalia",
  D: "D) Bulla",
  ans: 'A'
}

var QuesFour = {
  ques: "4) What is the name of the lead female character in Dilwale Dulhania Le Jayenge?",
  A: "A) Senorita",
  B: "B) Simran",
  C: "C) Sunita",
  D: "D) Pooja",
  ans: 'B'
}


var QuesFive = {
  ques: "5) In 3 Idiots, what is Rancho's real name?",
  A: "A) Ranchhoddas Shamaldas Chanchad",
  B: "B) Chatur Ramalingam",
  C: "C) Viru Sahastrabuddhe",
  D: "D) Phunsukh Wangdu",
  ans: 'D'
}

var QuesSix = {
  ques: "6) What profession does Sanjay Dutt fake in 'Lage Raho Munna Bhai'?",

  A: "A)  Doctor",
  B: "B) Software Engineer",
  C: "C) History Professor",
  D: "D) Film Director ",
  ans: "C"
}


var QuesSev = {
  ques: "7) Which actress debuted opposite Shahrukh Khan in 'Om Shanti Om'?",


  A: "A) Sonam kapoor",
  B: "B) Priyanka Chopra",
  C: "C) Kajol",
  D: "D) Deepika Padukone",
  ans: "D"

}
var Queseight = {
  ques: "8) In Om Shanti Om, what does Deepika Padukone's character Shantipriya do?",


  A: "A) Singer",
  B: "B) Actress",
  C: "C) Journalist",
  D: "D) Lawer",
  ans: "B"
}

var Quesnine = {
  ques: "9) Finish the quote from Deewar:Mere paas _____?",

  A: "A) Baap Hai",
  B: "B) Paisa",
  C: "C) Maa Hai",
  D: "D) Naya Iphone Hai",
  ans: "C"
}
var Questen = {
  ques: "10) In Chak De! India, how many minutes, according to coach Kabir Khan, does the team have?",

  A: "A) 60",
  B: "B) 70",
  C: "C) 69",
  D: "D) 90",
  ans: "B"
}

var Queseleven = {
  ques: "11) Who played lead role in movie PK?",

  A: "A) Amir Khan",
  B: "B) Salman Khan",
  C: "C) Tiger Shroff",
  D: "D) Varun Dhavan",
  ans: "A"
}

var Questwelve = {
  ques: "12) Which sport Sushant Singh Rajput Played in movie --> M.S. Dhoni: The Untold Story ",

  A: "A) Football",
  B: "B) Tennis",
  C: "C) Hockey",
  D: "D) Cricket",
  ans: "D"
}
var Questhirteen = {
  ques: "13) Who plays God in 'God Tussi Great Ho'?",

  A: "A) Amitabh Bachan",
  B: "B) Akshay Kumar",
  C: "C) Salman Khan",
  D: "D) Jacky Shroff",
  ans: "A"
}
var Quesfourteen = {
  ques: "14)  Hollywood is in the United States. In which country is Bollywood located ?",

  A: "A) Pakistan",
  B: "B) Russia",
  C: "C) India",
  D: "D) China",
  ans: "C"
}







var array1 = [QuesOne, QuesTwo, QuesThree, QuesFour, QuesFive, QuesSix, QuesSev, Queseight, Quesnine, Questen];

var array2 = [Queseleven, Questwelve, Questhirteen, Quesfourteen];

for (var i = 0; i < array1.length; i++) {
  Level1(array1[i].ques, array1[i].ans, array1[i].A, array1[i].B, array1[i].C, array1[i].D);
}

function Level1(Ques, Ans, A, B, C, D) {
  console.log(chalk.hex("#a64dff")(Ques + "\n"));
  console.log(chalk.hex("#d9b3ff")(A + "\n"));
  console.log(chalk.hex(" #d9b3ff")(B + "\n"));
  console.log(chalk.hex(" #d9b3ff")(C + "\n"));
  console.log(chalk.hex(" #d9b3ff")(D + "\n"));

  var userAns = readlineSync.question("Enter your Option --->");


  if (userAns.toUpperCase() === Ans.toUpperCase()) {
    console.log(chalk.green("\nRight Answer :-)"));
    score = score + 1;
    console.log(chalk.hex("#f5d969")("scores are :" + score));
  }
  else {
    console.log(chalk.red("\nWrong! :-("));
    console.log(chalk.green("Right option is :" + Ans))
    console.log(chalk.yellow("scores :" + score))
  }

  console.log("\n")
}
if (score >= 5) {
  console.log("\n");
  console.log(chalk.black(chalk.bgHex("#FFFFFF")("**Congratulations You reached Level 2**\n")));

  console.log("\n ")
  console.log(("            ") + chalk.hex("#2d0745")(chalk.bgWhite("Level 2\n")));

  for (var i = 0; i < array2.length; i++) {
    Level1(array2[i].ques, array2[i].ans, array2[i].A, array2[i].B, array2[i].C, array2[i].D);
  }
}
console.log("\n")
console.log(chalk.hex("#91d9ff")("------------Game Ends-------------\n"));

console.log(chalk.yellow("Final scores are :" + score))




























